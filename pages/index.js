import ContainerBlock from "../components/ContainerBlock";
import RecentProjects from "../components/RecentProjects";
import LatestBlog from "../components/LatestBlog";
import Banner from "../components/Banner";
import userData from "@constants/data";
import getLatestBlogs from "@lib/getLatestBlogs";

export default function Home({ blogs }) {
  return (
    <ContainerBlock
      title="Joana Estrella - Software Developer"
      description="A 22-year-old software developer based in Manila, Philippines."
    >
      <Banner />
      <RecentProjects />
      <LatestBlog blogs={blogs} />
    </ContainerBlock>
  );
}

export const getServerSideProps = async () => {
  const blogs = await getLatestBlogs(userData);
  return {
    props: {
      blogs,
    },
  };
};
