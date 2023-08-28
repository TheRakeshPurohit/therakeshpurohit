const Card = ({ title, date, readTime, link }) => {
  return (
    <div className="shadow-lg flex flex-col flex-grow gap-3 p-3">
      <Link href={link} >
      <div className="flex flex-col items-center justify-center">
      <span>{title}</span>
      </div>
      <div className="flex flex-row justify-between">
      <span>{date}</span>
      <span>{readTime}</span>
      </div> 
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
