import React from "react";
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
const FooterComponent = () => {
  return (
    <>
      <MDBFooter
        className="text-white text-center text-lg-left"
        style={{ backgroundColor: "#2f3030" }}
      >
        <MDBContainer className="p-4">
          <MDBRow>
            <MDBCol lg="12" md="12" className="mb-4 mb-md-0">
              <h5 className="text-uppercase" style={{ color: "white" }}>
                לווינים בן אלעזר
              </h5>

              <p style={{ color: "white" }}>
                בעלי ותק בתחום התקשורת הלווינית של 20 שנה | צור קשר - 0528785050
              </p>

              <a
                href="#!"
                style={{ textDecoration: "underline", color: "white" }}
              >
                הצהרת הנגישות של האתר
              </a>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", color: "white" }}
        >
          &copy; קטלוג המוצרים של בן אלעזר תקשורת לווינית, כל הזכויות שמורות
        </div>
      </MDBFooter>
    </>
  );
};
export default FooterComponent;
