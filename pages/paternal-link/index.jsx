import MainLayout from "../../layout/mainLayout";
import dynamic from "next/dynamic";
import SecondMiddleContent from "../../components/content/middle/other";
function PaternalLink() {
  return (
    <>
      <MainLayout>
        <SecondMiddleContent />
      </MainLayout>
    </>
  );
}
export default dynamic(() => Promise.resolve(PaternalLink), { ssr: false });
