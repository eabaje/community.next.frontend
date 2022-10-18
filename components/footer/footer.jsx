import React from "react";
import Link from "next/link";
function Footer() {
  return (
    <>
      {/* <!-- Start Copyright Area --> */}
      <div className="copyrights-area">
        <div className="container">
          <div className="row align-items-center">
            <p>
              <i className="ri-copyright-line"></i> 2024 MyArea. All Rights
              Reserved by &nbsp;
              <Link href={"#"} passHref>
                <a href="#" target="_blank">
                  MyArea
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
      {/* <!-- End Copyright Area --> */}

      {/* <!-- Start Go Top Area --> */}
      <div className="go-top">
        <i className="ri-arrow-up-line"></i>
      </div>
    </>
  );
}

export default Footer;
