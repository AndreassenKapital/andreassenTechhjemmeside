export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="container-p py-8 text-sm text-white/60">
        © {new Date().getFullYear()} Andreassen Technology AS. All rights reserved.
      </div>
    </footer>
  );
}

