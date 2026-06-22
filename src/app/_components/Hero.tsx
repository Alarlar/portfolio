import { siApple, siOpenai } from 'simple-icons';

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center pt-20 pb-4">
      <h1 className="text-5xl">Dinar Ibragimov</h1>
      <p className="mt-4">Backend Engineer · Node.js / Express / MongoDB / TypeScript</p>
      <div className="mt-4 mb-4">
        <div className="text-sm">Previously at</div>
        <div className="flex items-center justify-center gap-5 opacity-40 grayscale">
          <div className="w-[20px] h-[20px] flex items-center justify-center" dangerouslySetInnerHTML={{ __html: siApple.svg.replace('<svg', '<svg width="100%" height="100%"') }} />
          <div className="w-[20px] h-[20px] flex items-center justify-center" dangerouslySetInnerHTML={{ __html: siOpenai.svg.replace('<svg', '<svg width="100%" height="100%"') }} />
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