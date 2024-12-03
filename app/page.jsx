import Header from "@/components/Header";
import Preview from "@/components/Preview";
import Configurator from "@/components/Configurator";

function HomePage() {
  return (
    <>
      <Header />
      <main className="flex flex-col sm:flex-row justify-between md:gap-4">
        <section className="w-full md:w-3/4 p-2">
          {" "}
          <Preview />
        </section>
        <aside className="w-full md:w-1/4"><Configurator /></aside>
      </main>
    </>
  );
}
export default HomePage;
