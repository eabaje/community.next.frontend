import ContentMiddle from "../../components/content/middle";
import MainLayout from "../../layout/mainLayout";
import dynamic from "next/dynamic";
function Home() {
  return (
    <>
      <MainLayout>
        <ContentMiddle />
      </MainLayout>
    </>
  );
}
export default dynamic(() => Promise.resolve(Home), { ssr: false });
