import { useRouter } from "next/router";

// our-domain.com/news/somethin-important

function DetailPage() {

  const router= useRouter();
 const newsId= router.query.newsid

  return <h1>The Detail Page</h1>;
}

export default DetailPage;
