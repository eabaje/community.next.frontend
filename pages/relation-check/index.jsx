import MainLayout from "../../layout/mainLayout";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import UserItemWidget from "../../components/widget/user.item.widget";
import RelationForm from "../../components/form/relation/relationForm";

function index({ query }) {
  const router = useRouter();
  const { userId } = query;
  return (
    <>
      <MainLayout>
        <div class="page-banner-box bg-5">
          <h3>Relationship Check</h3>
        </div>
        <RelationForm userId={userId} />
      </MainLayout>
    </>
  );
}
export async function getServerSideProps({ query }) {
  return {
    props: { query },
  };
}
export default dynamic(() => Promise.resolve(index), { ssr: false });
