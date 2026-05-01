export default function GlassCard({ children, className = '', ...props }) {
	return (
		<div
			className={`rounded-3xl border border-[#18d7ff]/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.03))] shadow-[0_24px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl ${className}`}
			{...props}
		>
			{children}
		</div>
	);
}
