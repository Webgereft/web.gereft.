export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-bg/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="font-black text-xl text-white flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-primary block"></span>
          وب گرفت
        </div>
        <nav className="hidden md:flex gap-8 text-sm text-muted font-medium">
          <a href="#services" className="hover:text-white transition">خدمات</a>
          <a href="#portfolio" className="hover:text-white transition">نمونه‌کارها</a>
          <a href="#contact" className="hover:text-white transition">تماس</a>
        </nav>
        <a href="#contact" className="bg-primary hover:bg-accent text-white px-5 py-2.5 rounded-lg text-sm font-bold transition">
          مشاوره رایگان
        </a>
      </div>
    </header>
  );
}
