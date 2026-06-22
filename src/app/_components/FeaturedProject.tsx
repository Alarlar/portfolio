export default function FeaturedProject() {
  return (
    <section id="featured" className="px-6 py-12">
      <h2 className="text-3xl">Sonix</h2>
      <p className="mt-1">Real-time audio file management API</p>
      <p className="mt-4">
        Sonix is a backend service built for handling large audio uploads, user
        authentication with JWT, and efficient storage and retrieval using
        MongoDB&apos;s GridFS.
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
        <a href="#" className="px-5 py-2 border">Live Demo</a>
        <a href="#" className="px-5 py-2 border">GitHub</a>
      </div>
      <div className="mt-8 h-[300px] bg-gray-200 flex items-center justify-center">
        demo screenshot
      </div>
    </section>
  );
}