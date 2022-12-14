import MainLayout from "../../layout/mainLayout";
import dynamic from "next/dynamic";

import { useRouter } from "next/router";
import AddEditProfile from "../../components/form/profile/AddEditProfile";
function Index({ query }) {
  // const router = useRouter()
  // const { userId,type } = query;
  return (
    <>
      <MainLayout>
        <AddEditProfile query={query} />
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
