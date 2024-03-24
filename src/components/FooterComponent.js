import React from "react";
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
const FooterComponent = () => {
  return (
    <>
      <MDBFooter
        bgColor="primary"
        className="text-white text-center text-lg-left"
      >
        <MDBContainer className="p-4">
          <MDBRow>
            <MDBCol lg="12" md="12" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">לווינים בן אלעזר</h5>

              <p>
                בעלי ותק בתחום התקשורת הלווינית של 20 שנה | צור קשר - 0528785050
              </p>

              <a
                href="#!"
                className="text-white"
                style={{ textDecoration: "underline" }}
              >
                הצהרת הנגישות של האתר
              </a>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          &copy; קטלוג המוצרים של בן אלעזר תקשורת לווינית, כל הזכויות שמורות
        </div>
      </MDBFooter>
    </>
  );
};
export default FooterComponent;
