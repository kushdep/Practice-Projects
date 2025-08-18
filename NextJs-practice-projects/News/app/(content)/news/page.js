import NewsList from '@/components/news-list';

export default async function NewsPage() {
  const res = await fetch('http://localhost:8080/news')
  const news = await res.json()

  return (
    <>
      <h1>News Page</h1>
      <ul className="news-list">
        <NewsList news={news}/>
      </ul>
    </>
  );
}