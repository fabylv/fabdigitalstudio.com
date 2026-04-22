import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { Resend } from 'resend';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.resolve(__dirname, '../dist');
const indexPath = path.join(distPath, 'index.html');
const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const port = Number(process.env.PORT) || 3000;
const basicAuthUser = process.env.DEV_BASIC_AUTH_USER || '';
const basicAuthPass = process.env.DEV_BASIC_AUTH_PASS || '';
const basicAuthEnabled = Boolean(basicAuthUser && basicAuthPass);

function sendBasicAuthChallenge(res) {
	res.setHeader('WWW-Authenticate', 'Basic realm="FabDigital Studio Dev"');
	return res.status(401).send('Authentication required.');
}

function escapeHtml(value = '') {
	return String(value)
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#39;');
}

app.use(express.json());

if (basicAuthEnabled) {
	app.use((req, res, next) => {
		const authHeader = req.headers.authorization || '';

		if (!authHeader.startsWith('Basic ')) {
			return sendBasicAuthChallenge(res);
		}

		const decoded = Buffer.from(authHeader.slice(6), 'base64').toString('utf8');
		const separatorIndex = decoded.indexOf(':');
		const user = separatorIndex >= 0 ? decoded.slice(0, separatorIndex) : decoded;
		const pass = separatorIndex >= 0 ? decoded.slice(separatorIndex + 1) : '';

		if (user !== basicAuthUser || pass !== basicAuthPass) {
			return sendBasicAuthChallenge(res);
		}

		next();
	});
}

app.use(express.static(distPath));

app.post('/api/contact', async (req, res) => {
	const {
		name = '',
		email = '',
		businessName = '',
		projectType = '',
		timeline = '',
		budget = '',
		message = '',
		website = ''
	} = req.body || {};

	if (website) {
		return res.status(200).json({ success: true });
	}

	if (!name.trim() || !email.trim() || !message.trim()) {
		return res.status(400).json({ error: 'Name, email, and message are required.' });
	}

	if (!emailPattern.test(email.trim())) {
		return res.status(400).json({ error: 'Please enter a valid email address.' });
	}

	if (message.trim().length > 4000) {
		return res.status(400).json({ error: 'Message is too long.' });
	}

	if (!process.env.RESEND_API_KEY || !process.env.CONTACT_TO_EMAIL || !process.env.CONTACT_FROM_EMAIL) {
		return res.status(500).json({ error: 'Missing email configuration.' });
	}

	const safeFields = {
		name: escapeHtml(name.trim()),
		email: escapeHtml(email.trim()),
		businessName: escapeHtml(businessName.trim()),
		projectType: escapeHtml(projectType.trim()),
		timeline: escapeHtml(timeline.trim()),
		budget: escapeHtml(budget.trim()),
		message: escapeHtml(message.trim()).replace(/\n/g, '<br />')
	};

	try {
		const resendResult = await resend.emails.send({
			from: process.env.CONTACT_FROM_EMAIL,
			to: [process.env.CONTACT_TO_EMAIL],
			subject: `New FabDigital Studio inquiry from ${name.trim()}`,
			replyTo: email.trim(),
			text: [
				`Name: ${name.trim()}`,
				`Email: ${email.trim()}`,
				`Business: ${businessName.trim() || 'Not provided'}`,
				`Project type: ${projectType.trim() || 'Not provided'}`,
				`Timeline: ${timeline.trim() || 'Not provided'}`,
				`Budget: ${budget.trim() || 'Not provided'}`,
				'',
				'Message:',
				message.trim()
			].join('\n'),
			html: `
				<div style="font-family: Inter, Arial, sans-serif; color: #0f172a; line-height: 1.6;">
					<h2 style="margin-bottom: 16px;">New FabDigital Studio inquiry</h2>
					<p><strong>Name:</strong> ${safeFields.name}</p>
					<p><strong>Email:</strong> ${safeFields.email}</p>
					<p><strong>Business:</strong> ${safeFields.businessName || 'Not provided'}</p>
					<p><strong>Project type:</strong> ${safeFields.projectType || 'Not provided'}</p>
					<p><strong>Timeline:</strong> ${safeFields.timeline || 'Not provided'}</p>
					<p><strong>Budget:</strong> ${safeFields.budget || 'Not provided'}</p>
					<p><strong>Message:</strong><br />${safeFields.message}</p>
				</div>
			`
		});

		if (resendResult?.error) {
			console.error('FabDigital resend error:', resendResult.error);
			return res.status(500).json({
				error: 'Email sending is not ready yet. Please verify the sending domain in Resend and try again.'
			});
		}

		return res.status(200).json({ success: true, message: 'Your message was sent successfully.' });
	} catch (error) {
		console.error('FabDigital contact error:', error);
		return res.status(500).json({ error: 'Something went wrong while sending your message.' });
	}
});

app.get('*', (_req, res) => {
	res.sendFile(indexPath);
});

app.listen(port, () => {
	console.log(`FabDigital Studio server running on port ${port}`);
});
