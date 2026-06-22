export default function Contact() {
  return (
    <section id="contact" className="px-6 py-12 text-center">
      <h2 className="text-3xl">Contact</h2>
      <p className="mt-4">Open to swe roles. Let's talk.</p>
      <div className="flex justify-center gap-4 mt-6">
        <a
          href="https://github.com/Alarlar"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 border"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/dinarengineer/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 border"
        >
          LinkedIn
        </a>
        <a
          href="mailto:dinar.ibragim@proton.me"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 border"
        >
          Email
        </a>
      </div>
    </section>
  );
}