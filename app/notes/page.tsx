const Card = ({ title, date, readTime }) => {
  return (
    <div className="flex flex-col flex-grow border-3 border-sky-500 gap-3 p-3">
      <span>{title}</span>
      <span>{date}</span>
      <span>{readTime}</span>
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
