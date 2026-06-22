import { siApple, siOpenai } from 'simple-icons';

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center pt-20 pb-4">
      <h1 className="text-5xl">Dinar Ibragimov</h1>
      <p className="mt-4">Backend Engineer · Node.js / Express / MongoDB / TypeScript</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'center' }} className="mt-4 mb-4">
        <span className="text-sm">Previously at</span>
        <div className="w-[20px] h-[20px] flex items-center justify-center opacity-40" dangerouslySetInnerHTML={{ __html: siApple.svg.replace('<svg', '<svg width="100%" height="100%"') }} />
        <div className="w-[20px] h-[20px] flex items-center justify-center opacity-40" dangerouslySetInnerHTML={{ __html: siOpenai.svg.replace('<svg', '<svg width="100%" height="100%"') }} />
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