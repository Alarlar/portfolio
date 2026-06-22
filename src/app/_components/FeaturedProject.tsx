export default function FeaturedProject() {
  return (
    <section id="featured" className="px-6 py-12">
      <h2 className="text-3xl">Sonix</h2>
      <p className="mt-1">Real-time audio visualizer with WebGL shaders</p>
      <p className="mt-4">
        Full-stack web app where users log in, connect a microphone, and watch
        reactive GLSL shaders respond to live audio. Includes a searchable visual
        library with tags, pagination, and personal collections.
      </p>
      <p className="mt-4">
        Sole backend engineer — built the entire Node.js/Express/MongoDB API:
        JWT auth, visualizer API with search and pagination, GridFS image
        storage, rate limiting, and integration tests.
      </p>
      <div className="flex flex-wrap gap-2 mt-6">
        <span className="px-3 py-1 border text-sm">Node.js</span>
        <span className="px-3 py-1 border text-sm">Express</span>
        <span className="px-3 py-1 border text-sm">MongoDB</span>
        <span className="px-3 py-1 border text-sm">TypeScript</span>
        <span className="px-3 py-1 border text-sm">JWT</span>
        <span className="px-3 py-1 border text-sm">GridFS</span>
        <span className="px-3 py-1 border text-sm">Vitest</span>
      </div>
      <div className="flex gap-4 mt-6">
        <a
          href="https://l-group-practicum-team6.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 border"
        >
          Live Demo
        </a>
        <a
          href="https://github.com/Code-the-Dream-School/l-group-practicum-team6"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 border"
        >
          GitHub
        </a>
      </div>
      <div className="mt-8 h-[300px] bg-gray-200 flex items-center justify-center">
        demo screenshot
      </div>
    </section>
  );
}