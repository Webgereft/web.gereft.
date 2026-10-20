export default function Footer() {
  return (
    <footer className="border-t border-border py-12 text-center text-muted text-sm mt-12 bg-card/30">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© ۲۰۲۴ وب گرفت - تمامی حقوق محفوظ است.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary transition">اینستاگرام</a>
          <a href="#" className="hover:text-primary transition">واتساپ</a>
          <a href="#" className="hover:text-primary transition">تلگرام</a>
        </div>
      </div>
    </footer>
  );
}
