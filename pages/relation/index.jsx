import FirstMiddleContent from "../../components/content/middle";
import MainLayout from "../../layout/mainLayout";
import dynamic from "next/dynamic";
import SecondMiddleContent from "../../components/content/middle/other";
function Index({ query }) {
  // const router = useRouter()
  // const { userId,type } = query;
  return (
    <>
      <MainLayout>
        <SecondMiddleContent query={query} />
      </MainLayout>
    </>
  );
}
export async function getServerSideProps({ query }) {
  return {
    props: { query },
  };
}
export default dynamic(() => Promise.resolve(Index), { ssr: false });
