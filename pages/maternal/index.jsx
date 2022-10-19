import FirstMiddleContent from "../../components/content/middle";
import MainLayout from "../../layout/mainLayout";
import dynamic from "next/dynamic";
import SecondMiddleContent from "../../components/content/middle/other";
function Index() {
  return (
    <>
      <MainLayout>
        <SecondMiddleContent />
      </MainLayout>
    </>
  );
}
export default dynamic(() => Promise.resolve(Index), { ssr: false });
