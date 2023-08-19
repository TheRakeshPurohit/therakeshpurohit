import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-row supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <Link className="gap-2 p-8" href="/">
        house🏠
      </Link>
      <Link className="gap-2 p-8" href="/notes">
        notes✍🏽
      </Link>
      <Link className="gap-2 p-8" href="/whoami">
        whoami❓
      </Link>
    </header>
  );
}
