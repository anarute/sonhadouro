import Container from "../components/container";
import Posts from "../components/more-stories";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";

export default function News({ allPosts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>sonhadouro - notícias</title>
        </Head>
        <Container>
          {allPosts.length > 0 && <Posts posts={allPosts} />}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
}
