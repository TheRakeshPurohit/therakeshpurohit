import Link from "next/link";

const Card = ({ title, date, readTime, link }) => {
  return (
    //card component to display title date readTime and link
    <div>
      <Link href={link}>
        <a className="flex flex-col gap-2 p-3 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold">{title}</h1>
          <div className="flex gap-2">
            <p className="text-sm text-gray-500">{date}</p>
            <p
              className="text-sm text-gray-500"
              style={{ marginLeft: "auto" }}
            >
              {readTime}
            </p>
          </div>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, sequi.
          </p> 
        </a>
      </Link>
    </div>
  );
};
export default function Home() {
  return (
    <main className="flex flex-col flex-grow gap-3 p-3">
      <Card title={"Revision for a Web Dev"} date={"28th August 2023"} readTime={"2 minutes"} link="/notes/revision-for-a-web-dev"/>
    </main>
  );
}
