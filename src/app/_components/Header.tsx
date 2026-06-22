export default function Header() {
  return (
    <header className="sticky top-0 flex items-center justify-between px-6 py-4 border-b">
      <div>Dinar Ibragimov</div>
      <nav className="flex gap-6">
        <a href="#about">About</a>
        <a href="#featured">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}