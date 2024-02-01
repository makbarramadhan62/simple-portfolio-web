export default function FooterSection() {
  return (
    <footer className="py-8">
      <p className="font-medium text-xs text-slate-500 text-center">
        Dibuat dengan <span className="text-pink-500">❤️</span>
        <a
          href="https://www.instagram.com/marmdhn_/"
          target="_blank"
          className="font-bold text-primary"
        >
          Muhammad Akbar Ramadhan
        </a>
        , menggunakan
        <a
          href="https://tailwindcss.com"
          target="_blank"
          className="font-bold text-sky-500"
        >
          tailwind CSS
        </a>
        .
      </p>
    </footer>
  );
}
