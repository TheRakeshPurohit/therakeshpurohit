import Image from "next/image";
export default function Footer() {
  return (
    <div className=" flex flex-row justify-center items-center h-10 gap-2 ">
      {/* GitHub  */}
      <a
        className="flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
        href="https://github.com/therakeshpurohit"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/assets/icons/github.svg"
          alt="Github Logo"
          className="dark:invert"
          width={27}
          height={27}
          priority
        />
      </a>
      {/* LinkedIn  */}
      <a
        className="flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
        href="https://linkedin.com/in/therakeshpurohit"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/assets/icons/linkedin.svg"
          alt="LinkedIn Logo"
          className="dark:invert"
          width={27}
          height={27}
          priority
        />
      </a>
      {/* Twitter  */}
      <a
        className="flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
        href="https://x.com/irakeshpurohit"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/assets/icons/X.svg"
          alt="X Logo"
          className="dark:invert"
          width={27}
          height={27}
          priority
        />
      </a>
      {/* Stack Overflow  */}
      {/* <a
        className="flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
        href="https://stackoverflow.com/therakeshpurohit"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/assets/icons/stackoverflow.svg"
          alt="Stack Overflow Logo"
          className="dark:invert"
          width={27}
          height={27}
          priority
        />
      </a> */}
      {/* Medium  */}
      {/* <a
        className="flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
        href="https://medium.com/therakeshpurohit"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/assets/icons/medium.svg"
          alt="Medium Logo"
          className="dark:invert"
          width={27}
          height={27}
          priority
        />
      </a> */}
    </div>
  );
}
