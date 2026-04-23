function joinClasses(...classes) {
	return classes.filter(Boolean).join(' ');
}

const variants = {
	primary: 'button-primary',
	secondary: 'button-secondary'
};

export default function Button({
	as = 'button',
	href,
	variant = 'primary',
	size = 'md',
	disabled = false,
	loading = false,
	displayClass = 'inline-flex items-center justify-center',
	className = '',
	type = 'button',
	children,
	...props
}) {
	const isLink = as === 'a' || Boolean(href);
	const Component = isLink ? 'a' : as;
	const isDisabled = disabled || loading;

	const classes = joinClasses(
		displayClass,
		'btn',
		`btn-${size}`,
		isDisabled ? 'btn-disabled' : variants[variant] ?? variants.primary,
		isDisabled && isLink ? 'pointer-events-none' : '',
		className
	);

	if (isLink) {
		return (
			<Component
				href={isDisabled ? undefined : href}
				aria-disabled={isDisabled || undefined}
				className={classes}
				{...props}
			>
				{children}
			</Component>
		);
	}

	return (
		<Component type={type} disabled={isDisabled} className={classes} {...props}>
			{children}
		</Component>
	);
}
