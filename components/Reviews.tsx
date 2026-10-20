"use client";
import { useState, useEffect } from "react";
import { supabase } from "../utils/supabase";

export default function Reviews() {
  const [reviews, setReviews] = useState<any[]>([]);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      const { data } = await supabase.from("reviews").select("*").order("created_at", { ascending: false });
      if (data) setReviews(data);
    };
    fetchReviews();
  }, []);

  const submitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.from("reviews").insert([{ name, rating, message }]);
    if (!error) {
      setReviews([{ name, rating, message, created_at: new Date() }, ...reviews]);
      setName(""); setMessage(""); setRating(5);
    }
    setLoading(false);
  };

  return (
    <section className="py-24 px-6 max-w-4xl mx-auto border-t border-border">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">نظرات شما</h2>
      <form onSubmit={submitReview} className="bg-card border border-border p-6 rounded-2xl mb-12">
        <h3 className="text-xl font-bold mb-4">نظر خودت رو ثبت کن</h3>
        <div className="flex gap-2 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <button type="button" key={star} onClick={() => setRating(star)} className="text-3xl transition hover:scale-110">
              {star <= rating ? "⭐" : "☆"}
            </button>
          ))}
        </div>
        <input type="text" placeholder="اسمت" value={name} onChange={(e) => setName(e.target.value)} required className="w-full bg-bg border border-border p-3 rounded-lg mb-4 text-white focus:outline-none focus:border-primary" />
        <textarea placeholder="نظرت درباره کار ما..." value={message} onChange={(e) => setMessage(e.target.value)} required rows={3} className="w-full bg-bg border border-border p-3 rounded-lg mb-4 text-white focus:outline-none focus:border-primary"></textarea>
        <button type="submit" disabled={loading} className="bg-primary hover:bg-accent text-white px-6 py-3 rounded-lg font-bold transition disabled:opacity-50">
          {loading ? "در حال ارسال..." : "ارسال نظر"}
        </button>
      </form>
      <div className="space-y-4">
        {reviews.map((rev, i) => (
          <div key={i} className="bg-card border border-border p-6 rounded-2xl">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-bold text-white">{rev.name}</h4>
              <div className="text-yellow-400">{"⭐".repeat(rev.rating)}</div>
            </div>
            <p className="text-muted">{rev.message}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
