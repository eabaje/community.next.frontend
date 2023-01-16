import FirstMiddleContent from "../../components/content/middle";
import MainLayout from "../../layout/mainLayout";
import dynamic from "next/dynamic";
function Home({ query }) {
  const { userId } = query;
  return (
    <>
      <MainLayout>
        <FirstMiddleContent userId={userId} />
      </MainLayout>
    </>
  );
}
export async function getServerSideProps({ query }) {
  return {
    props: { query },
  };
}
export default dynamic(() => Promise.resolve(Home), { ssr: false });
