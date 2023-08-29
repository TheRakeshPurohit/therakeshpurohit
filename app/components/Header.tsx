import Link from "next/link";

export default function Header() {
  return (
    <div>
      <header className="flex flex-row supports-backdrop-blur:bg-background/60 top-0 z-50 w-full border bg-background/95 backdrop-blur rounded-full p-2 m-2">
        <nav className="flex flex-row m-3">
          <Link
            className="gap-3 p-3 m-3 rounded-full border border-indigo-800 hover:bg-sky-700"
            href="/"
          >
            TheRakeshPurohit.com🏠
          </Link>
          <Link
            className="gap-3 p-3 m-3 rounded-full border border-indigo-800 hover:bg-sky-700"
            href="/notes"
          >
            Notes ✍🏽
          </Link>
          <Link
            className="gap-3 p-3 m-3 rounded-full border border-indigo-800 hover:bg-sky-700"
            href="/notes"
          >
            {`code </>`}👨🏻‍💻
          </Link>
          <Link
            className="gap-3 p-3 m-3 rounded-full border border-indigo-800 hover:bg-sky-700"
            href="/whoami"
          >
            whoami❓
          </Link>
        </nav>
      </header>
    </div>
  );
}
