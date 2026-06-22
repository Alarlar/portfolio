export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center py-20">
      <h1 className="text-5xl">Dinar Ibragimov</h1>
      <p className="mt-4">Backend Engineer · Node.js / Express / MongoDB</p>
      <div className="flex gap-4 mt-8">
        <a href="#featured" className="px-5 py-2 border">
          View Project
        </a>
        <a href="#contact" className="px-5 py-2 border">
          Contact
        </a>
      </div>
    </section>
  );
}