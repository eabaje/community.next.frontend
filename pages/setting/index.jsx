import FirstMiddleContent from "../../components/content/middle";
import MainLayout from "../../layout/mainLayout";
import dynamic from "next/dynamic";
import SecondMiddleContent from "../../components/content/middle/other";
import { useRouter } from "next/router";
import AddEditMessage from "../../components/form/setting/AddEditMessage";
import { AddEditCloseAccount } from "../../components/form/setting/AddEditCloseAccount";
import AddEditNotification from "../../components/form/setting/AddEditNotification";
import AddeditPrivacy from "../../components/form/setting/AddeditPrivacy";
import AddEditAccount from "../../components/form/setting/AddEditAccount";
function Index({ query }) {
  // const router = useRouter()
  // const { userId,type } = query;
  return (
    <>
      <MainLayout>
        <div class="page-banner-box">
          <h3>Account Setting</h3>
        </div>

        <div class="account-setting-list-tabs">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link active"
                id="account-tab"
                data-bs-toggle="tab"
                href="#account"
                role="tab"
                aria-controls="account"
              >
                Account
              </a>
            </li>

            <li class="nav-item">
              <a
                class="nav-link"
                id="privacy-tab"
                data-bs-toggle="tab"
                href="#privacy"
                role="tab"
                aria-controls="privacy"
              >
                Privacy
              </a>
            </li>

            <li class="nav-item">
              <a
                class="nav-link"
                id="notification-tab"
                data-bs-toggle="tab"
                href="#notification"
                role="tab"
                aria-controls="notification"
              >
                Notification
              </a>
            </li>

            <li class="nav-item">
              <a
                class="nav-link"
                id="message-tab"
                data-bs-toggle="tab"
                href="#message"
                role="tab"
                aria-controls="message"
              >
                Message
              </a>
            </li>

            <li class="nav-item">
              <a
                class="nav-link"
                id="close-account-tab"
                data-bs-toggle="tab"
                href="#close-account"
                role="tab"
                aria-controls="close-account"
              >
                Close Account
              </a>
            </li>
          </ul>
        </div>

        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="account" role="tabpanel">
            <AddEditAccount query={query} />
          </div>

          <div class="tab-pane fade" id="privacy" role="tabpanel">
            <AddeditPrivacy />
          </div>

          <div class="tab-pane fade" id="notification" role="tabpanel">
            <AddEditNotification />
          </div>

          <div class="tab-pane fade" id="message" role="tabpanel">
            <AddEditMessage />
          </div>

          <div class="tab-pane fade" id="close-account" role="tabpanel">
            <AddEditCloseAccount />
          </div>
        </div>
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
