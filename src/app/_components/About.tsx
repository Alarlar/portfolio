export default function About() {
  return (
    <section id="about" className="px-6 py-12">
      <h2 className="text-3xl">About</h2>
      <p className="mt-4">
        Backend engineer with an unconventional path — I spent years doing
        systems QA at Apple and robotics validation at OpenAI, which gave me
        a deep appreciation for how reliable software is actually built.
        That experience pushed me toward development, and I completed a
        full-stack bootcamp focused on React and Node.js.
      </p>
      <p className="mt-4">
        I specialize in backend: building REST APIs, auth systems, and data
        layers with Node.js, Express, and MongoDB. My QA background means I
        think about edge cases and write tests from day one — not as an
        afterthought.
      </p>
      <div className="flex flex-wrap gap-2 mt-6">
        <span className="px-3 py-1 border text-sm">Node.js</span>
        <span className="px-3 py-1 border text-sm">Express</span>
        <span className="px-3 py-1 border text-sm">MongoDB</span>
        <span className="px-3 py-1 border text-sm">TypeScript</span>
        <span className="px-3 py-1 border text-sm">REST APIs</span>
        <span className="px-3 py-1 border text-sm">JWT</span>
        <span className="px-3 py-1 border text-sm">Vitest</span>
        <span className="px-3 py-1 border text-sm">Supertest</span>
        <span className="px-3 py-1 border text-sm">Git</span>
        <span className="px-3 py-1 border text-sm">React</span>
      </div>
    </section>
  );
}