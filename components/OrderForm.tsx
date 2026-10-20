"use client";
import { useState } from "react";
import { supabase } from "../utils/supabase";

export default function OrderForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [projectType, setProjectType] = useState("سایت شرکتی");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const submitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    const { error } = await supabase.from("orders").insert([{ name, phone, project_type: projectType, description }]);
    if (error) { setStatus("error"); } else {
      setStatus("success");
      setName(""); setPhone(""); setDescription("");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-3xl mx-auto border-t border-border">
      <div className="bg-gradient-to-br from-primary/20 to-card border border-primary/30 p-8 md:p-12 rounded-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">پروژه‌ات رو شروع کن</h2>
        <p className="text-muted text-center mb-8">فرم زیر رو پر کن، تا ۲۴ ساعت آینده باهات تماس می‌گیریم.</p>
        <form onSubmit={submitOrder} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="اسم و فامیل" value={name} onChange={(e) => setName(e.target.value)} required className="w-full bg-bg/50 border border-border p-3 rounded-xl text-white focus:outline-none focus:border-primary" />
            <input type="tel" placeholder="شماره تماس" value={phone} onChange={(e) => setPhone(e.target.value)} required className="w-full bg-bg/50 border border-border p-3 rounded-xl text-white focus:outline-none focus:border-primary" />
          </div>
          <select value={projectType} onChange={(e) => setProjectType(e.target.value)} className="w-full bg-bg/50 border border-border p-3 rounded-xl text-white focus:outline-none focus:border-primary">
            <option value="سایت شرکتی">سایت شرکتی</option>
            <option value="فروشگاه آنلاین">فروشگاه آنلاین</option>
            <option value="لندینگ پیج">لندینگ پیج</option>
            <option value="سایر">سایر</option>
          </select>
          <textarea placeholder="درباره پروژه‌ات بنویس..." value={description} onChange={(e) => setDescription(e.target.value)} rows={4} className="w-full bg-bg/50 border border-border p-3 rounded-xl text-white focus:outline-none focus:border-primary"></textarea>
          <button type="submit" disabled={status === "loading"} className="w-full bg-primary hover:bg-accent text-white py-4 rounded-xl font-bold text-lg transition disabled:opacity-50">
            {status === "loading" ? "در حال ارسال..." : "ثبت سفارش"}
          </button>
          {status === "success" && <p className="text-green-400 text-center font-bold">✅ سفارش شما ثبت شد!</p>}
          {status === "error" && <p className="text-red-400 text-center font-bold">❌ خطایی رخ داد. دوباره تلاش کن.</p>}
        </form>
      </div>
    </section>
  );
}
