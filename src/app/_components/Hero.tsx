import { siApple, siOpenai } from 'simple-icons';

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center pt-20 pb-8">
      <h1 className="text-5xl">Dinar Ibragimov</h1>
      <p className="mt-4">Backend Engineer · Node.js / Express / MongoDB</p>
      <div className="mt-6">
        <div className="text-sm">Previously at</div>
        <div className="flex items-center gap-6 opacity-40 grayscale mt-1 [&>span>svg]:h-6">
          <span dangerouslySetInnerHTML={{ __html: siApple.svg }} />
          <span dangerouslySetInnerHTML={{ __html: siOpenai.svg }} />
        </div>
      </div>
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