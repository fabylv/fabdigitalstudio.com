import Button from '../ui/Button';

export default function Header({ navigation }) {
  return (
    <header className="sticky top-0 z-30 border-b border-black/5 bg-white/90 backdrop-blur">
      <div className="site-container flex items-center justify-between gap-6 py-4">
        <a className="text-lg font-semibold tracking-tight text-ink-950" href="#top">
          Fab Digital Studio
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a key={item.label} className="text-sm font-medium text-ink-600 transition hover:text-ink-950" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <Button className="hidden md:inline-flex" href="#contact">
          Start Your Project
        </Button>
      </div>
    </header>
  );
}
