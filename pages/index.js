import Link from "next/link";
import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";

const PostLink = props => (
  <li key={props.show.id}>
    <Link href="/post/[id]" as={`/post/${props.show.id}`}>
      <a>{props.show.name}</a>
    </Link>
  </li>
);

const Index = props => {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        {props.shows.map(show => (
          <PostLink key={show.id} show={show} />
        ))}
      </ul>
    </Layout>
  );
};

Index.getInitialProps = async function() {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.show)
  };
};

export default Index;
