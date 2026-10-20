export default function Services() {
  const items = [
    { icon: "🌐", title: "سایت شرکتی و شخصی", desc: "معرفی حرفه‌ای کسب‌وکارت" },
    { icon: "🛒", title: "فروشگاه آنلاین", desc: "فروش آنلاین بدون دردسر" },
    { icon: "📄", title: "لندینگ‌پیج", desc: "جذب مشتری با یه صفحه مؤثر" },
    { icon: "⚡", title: "سرعت و سئو پایه", desc: "دیده شدن در گوگل" },
  ];

  return (
    <section id="services" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">خدمات ما</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, i) => (
          <div key={i} className="bg-card border border-border p-8 rounded-2xl hover:border-primary/50 transition duration-300">
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
