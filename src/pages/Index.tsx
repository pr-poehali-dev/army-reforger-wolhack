import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const HERO_IMG = 'https://cdn.poehali.dev/projects/30e7c083-5ab0-47a2-91ae-ccb2ec6fc206/files/a547503e-e72d-4a32-8a21-978f74454af1.jpg';

const features = [
  { icon: 'Crosshair', title: 'Тактический прицел', desc: 'Улучшенное наведение и маркеры целей на поле боя в реальном времени.' },
  { icon: 'Radar', title: 'Радар противника', desc: 'Отображение позиций врагов и союзников на мини-карте.' },
  { icon: 'Zap', title: 'Быстрые действия', desc: 'Мгновенное переключение оружия и снаряжения через горячие клавиши.' },
  { icon: 'Shield', title: 'Защита сессии', desc: 'Безопасная работа расширения без риска для аккаунта.' },
  { icon: 'Gauge', title: 'Оптимизация FPS', desc: 'Разгон производительности для плавного геймплея на любом железе.' },
  { icon: 'Map', title: 'Расширенная карта', desc: 'Детальная тактическая карта с точками интереса и маршрутами.' },
];

const navItems = [
  { label: 'Главная', href: '#home' },
  { label: 'Возможности', href: '#features' },
  { label: 'Скачать', href: '#download' },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <Icon name="Target" className="text-primary" size={28} />
            <span className="font-heading text-2xl font-bold tracking-widest">WARFORGE</span>
          </a>
          <nav className="hidden gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-heading text-sm uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <Button asChild className="font-heading uppercase tracking-wider">
            <a href="#download">Скачать</a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 bg-background/75" />
        <div className="absolute inset-0 camo-pattern opacity-40" />
        <div className="container relative z-10 py-24">
          <div className="max-w-3xl animate-fade-in">
            <div className="mb-6 inline-flex items-center gap-2 border border-primary/50 bg-primary/10 px-4 py-1.5">
              <Icon name="Radio" size={16} className="text-primary" />
              <span className="font-heading text-xs uppercase tracking-widest text-primary">
                Расширение для Army Reforger
              </span>
            </div>
            <h1 className="mb-6 font-heading text-6xl font-bold leading-none md:text-8xl">
              WAR<span className="text-primary">FORGE</span>
            </h1>
            <p className="mb-8 max-w-xl font-body text-lg text-muted-foreground md:text-xl">
              Новые тактические возможности для Army Reforger. Прицел, радар, оптимизация — всё, чтобы доминировать на поле боя.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="font-heading text-base uppercase tracking-wider">
                <a href="#download">
                  <Icon name="Download" size={20} className="mr-2" />
                  Скачать бесплатно
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-heading text-base uppercase tracking-wider">
                <a href="#features">Возможности</a>
              </Button>
            </div>
            <div className="mt-12 flex gap-10">
              {[
                { num: '12K+', label: 'Игроков' },
                { num: '4.9', label: 'Рейтинг' },
                { num: '24/7', label: 'Обновления' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-heading text-3xl font-bold text-primary">{s.num}</div>
                  <div className="font-body text-sm text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative border-y border-border py-24">
        <div className="container">
          <div className="mb-16 text-center">
            <span className="font-heading text-sm uppercase tracking-widest text-accent">Арсенал</span>
            <h2 className="mt-3 font-heading text-4xl font-bold md:text-5xl">Возможности расширения</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="group relative border border-border bg-card p-8 transition-all hover:border-primary hover:-translate-y-1"
              >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center border border-primary/40 bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <Icon name={f.icon} size={28} className="text-primary" />
                </div>
                <h3 className="mb-3 font-heading text-xl font-semibold">{f.title}</h3>
                <p className="font-body text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download */}
      <section id="download" className="relative overflow-hidden py-24">
        <div className="absolute inset-0 camo-pattern opacity-20" />
        <div className="container relative z-10">
          <div className="mx-auto max-w-2xl border border-border bg-card p-10 text-center md:p-16">
            <Icon name="ShieldCheck" size={48} className="mx-auto mb-6 text-primary" />
            <h2 className="mb-4 font-heading text-4xl font-bold md:text-5xl">Готов к бою?</h2>
            <p className="mb-8 font-body text-lg text-muted-foreground">
              Скачай WARFORGE и получи все тактические преимущества уже сегодня. Версия 2.4.1 для Army Reforger.
            </p>
            <Button size="lg" className="font-heading text-lg uppercase tracking-wider">
              <Icon name="Download" size={22} className="mr-2" />
              Скачать WARFORGE
            </Button>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><Icon name="Check" size={16} className="text-primary" /> Windows 10/11</span>
              <span className="flex items-center gap-2"><Icon name="Check" size={16} className="text-primary" /> 45 МБ</span>
              <span className="flex items-center gap-2"><Icon name="Check" size={16} className="text-primary" /> Без вирусов</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Icon name="Target" className="text-primary" size={22} />
            <span className="font-heading text-lg font-bold tracking-widest">WARFORGE</span>
          </div>
          <p className="font-body text-sm text-muted-foreground">
            © 2026 WARFORGE. Расширение для Army Reforger.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
