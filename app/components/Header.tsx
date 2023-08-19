import Link from "next/link";

export default function Header() {
  return (
    <div className="flex flex-row justify-center items-center h-10 gap-2">
      <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <Link className="gap-2 p-8" href="/">
          ⏎ to Base
        </Link>
        <Link className="gap-2 p-8" href="/notes">
          Notes ✍🏽
        </Link>
        <Link className="gap-2 p-8" href="/whoishe">
          Who is he❓
        </Link>
        <Link className="gap-2 p-8" href="/lemmetalktoyou">
          Lemme talk to you ☕
        </Link>
      </header>
    </div>
  );
}
