import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Reviews from "../components/Reviews";
import OrderForm from "../components/OrderForm";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-bg text-white min-h-screen font-sans selection:bg-primary selection:text-white">
      <Header />
      <Hero />
      <Services />
      <Reviews />
      <OrderForm />
      <Footer />
    </main>
  );
}
