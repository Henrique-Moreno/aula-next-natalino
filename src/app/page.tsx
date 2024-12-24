import Card from "@/app/components/Card";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col justify-between min-h-screen">
      <section className="flex flex-col items-center justify-center px-4 text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white py-6 md:py-10">
          Feliz Natal e Boas Festas!
        </h1>
        <Card />
      </section>
      <Footer />
    </main>
  );
}
