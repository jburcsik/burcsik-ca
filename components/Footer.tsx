export default function Footer() {
  return (
    <footer className="px-6 md:px-12 max-w-site mx-auto py-8 border-t border-foreground/8">
      <div className="flex items-center justify-between text-xs text-foreground/30">
        <span>burcsik.ca</span>
        <div className="flex items-center gap-4">
          <a
            href="https://linkedin.com/in/jburcsik"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground/60 transition-colors"
          >
            LinkedIn
          </a>
          <span>© {new Date().getFullYear()} Jesse Burcsik</span>
        </div>
      </div>
    </footer>
  );
}
