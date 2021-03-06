import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import fetch from "isomorphic-unfetch";

const Content = props => {
  return (
    <>
      <h1>{props.show.name}</h1>
      <p>{props.show.summary.replace(/<[/]?[pb]>/g, "")}</p>
      <img src={props.show.image.medium} />
    </>
  );
};

const Post = props => {
  return (
    <Layout>
      <Content show={props.show} />
    </Layout>
  );
};

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  console.log(context);
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);

  return { show };
};

export default Post;
