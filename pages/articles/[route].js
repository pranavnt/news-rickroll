//<iframe id="video" src="https://www.youtube.com/embed/dQw4w9WgXcQ&autoplay=1" frameborder="0" allowfullscreen></iframe>
import Head from "next/head";
let title;

export default function Post({ md }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ReactMarkdown children={md} className={styles.post} allowDangerousHtml />
    </div>
  );
}

Post.getInitialProps = async (ctx) => {
  // gets route
  var postRoute = ctx.query.post;

  var articleArr = postsJSON.posts;

  for (var i = 0; i < articleArr.length; i++) {
    if (articleArr[i].route == postRoute) {
      var link = articleArr[i].link;

      await axios(link).then((response) => {
        markdown = response.data;
      });

      return { md: markdown };
    }
  }
  return { md: "Page not found" };
};