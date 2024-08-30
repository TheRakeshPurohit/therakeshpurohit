import Image from "next/image";

const socialLinks = [
  {
    href: "https://github.com/therakeshpurohit",
    src: "/assets/icons/github.svg",
    alt: "Github Logo",
  },
  {
    href: "https://linkedin.com/in/therakeshpurohit",
    src: "/assets/icons/linkedin.svg",

    alt: "LinkedIn Logo",
  },
  {
    href: "https://x.com/irakeshpurohit",
    src: "/assets/icons/X.svg",
    alt: "X Logo",
  },
  // Add other social links here if needed
];

export default function Footer() {
  return (
    <footer
      className="flex flex-row justify-center item-center supports-backdrop-blur:bg-background/60 bottom-0 z-50 w-full border-b bg-background/95 backdrop-blur
 gap-2 h-2"
    >
      {socialLinks.map((link) => (
        <a
          key={link.href}
          className="gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={link.src}
            alt={link.alt}
            className="dark:invert"
            width={27}
            height={27}
            priority
          />
        </a>
      ))}
    </footer>
  );
}
