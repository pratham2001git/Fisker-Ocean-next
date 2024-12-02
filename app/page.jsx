import Header from "@/components/Header";

function HomePage() {
  return (
    <>
    <Header />
    <main className="flex flex-col sm:flex-row justify-between md:gap-4">
      <section className="w-full md:w-3/4 bg-blue-500">Preview </section>
      <aside className="w-full md:w-1/4 bg-red-500">Preview </aside>

    </main>
    </>
  );
}
export default HomePage;
