const variants = {
  primary: 'button-primary',
  secondary: 'button-secondary',
};

export default function Button({ href, children, variant = 'primary', className = '' }) {
  const classes = `${variants[variant] ?? variants.primary} ${className}`.trim();

  if (href) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type="button">
      {children}
    </button>
  );
}
