import NewsList from '@/components/news-list';
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from '@/lib/news';
import Link from 'next/link';

export default function FilteredNewsPage({ params }) {
  const filter = params.filter;
  // const news = getNewsForYear(newsYear);
  const selectedYear = filter ? filter[0] : undefined
  const selectedMonth = filter ? filter[1] : undefined

  let news;
  let newsContent=<p>Cannot find News for the selected Period</p>;
  let links = getAvailableNewsYears()

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear)
    links = getAvailableNewsMonths(selectedYear)
  }

  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear,selectedMonth)
    links=[]
  }

  if(news && news.length>0){
    newsContent = <NewsList news={news}/>
  }

  if (
    (selectedYear && !getAvailableNewsYears().includes(+selectedYear)) ||
    (selectedMonth &&
      !getAvailableNewsMonths(selectedYear).includes(+selectedMonth))
  ) {
    throw new Error('Invalid filter.');
  }

  return <>
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => {
            let href = selectedYear?`/archive/${selectedYear}/${link}`:`/archive/${link}`
            return <li key={link}>
              <Link href={href}>{link}</Link>
            </li>
})}
        </ul>
      </nav>
      {newsContent}
    </header>
  </>

}