import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function setCorsHeaders(res) {
	const allowedOrigin = process.env.ALLOWED_ORIGIN || '*';
	res.setHeader('Access-Control-Allow-Origin', allowedOrigin);
	res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

function sendJson(res, status, payload) {
	setCorsHeaders(res);
	return res.status(status).json(payload);
}

function escapeHtml(value = '') {
	return String(value)
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#39;');
}

export default async function handler(req, res) {
	if (req.method === 'OPTIONS') {
		setCorsHeaders(res);
		return res.status(204).end();
	}

	if (req.method !== 'POST') {
		return sendJson(res, 405, { error: 'Method not allowed.' });
	}

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
		return sendJson(res, 200, { success: true });
	}

	if (!name.trim() || !email.trim() || !message.trim()) {
		return sendJson(res, 400, { error: 'Name, email, and message are required.' });
	}

	if (!emailPattern.test(email.trim())) {
		return sendJson(res, 400, { error: 'Please enter a valid email address.' });
	}

	if (message.trim().length > 4000) {
		return sendJson(res, 400, { error: 'Message is too long.' });
	}

	if (!process.env.RESEND_API_KEY || !process.env.CONTACT_TO_EMAIL || !process.env.CONTACT_FROM_EMAIL) {
		return sendJson(res, 500, { error: 'Missing email configuration.' });
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
		await resend.emails.send({
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

		return sendJson(res, 200, { success: true, message: 'Your message was sent successfully.' });
	} catch (error) {
		console.error('FabDigital contact error:', error);
		return sendJson(res, 500, { error: 'Something went wrong while sending your message.' });
	}
}
