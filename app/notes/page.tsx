const Card = ({ title, date, readTime }) => {
  return (
    <div className="shadow-lg flex flex-col flex-grow gap-3 p-3 ">
      <div className="flex flex-col items-center justify-center">
      <span>{title}</span>
      </div>
      <div className="flex flex-row justify-between">
      <span>{date}</span>
      <span>{readTime}</span>
      </div> 
    </div>
  );
};
export default function Home() {
  return (
    <main className="flex flex-col flex-grow gap-3 p-3">
      <Card title={"title"} date={"date"} readTime={"readTime"} />
      <Card title={"title"} date={"date"} readTime={"readTime"} />
      <Card title={"title"} date={"date"} readTime={"readTime"} />
      <Card title={"title"} date={"date"} readTime={"readTime"} />
      <Card title={"title"} date={"date"} readTime={"readTime"} />
      <Card title={"title"} date={"date"} readTime={"readTime"} />
    </main>
  );
}
