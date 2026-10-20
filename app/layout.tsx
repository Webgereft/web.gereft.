import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazir = Vazirmatn({ 
  subsets: ["arabic"], 
  weight: ["400", "700", "900"] 
});

export const metadata: Metadata = {
  title: "وب گرفت | طراحی سایت",
  description: "هر سایتی که کسب‌وکارت لازم داره",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={vazir.className}>
      <body className="bg-bg text-white antialiased">{children}</body>
    </html>
  );
}
