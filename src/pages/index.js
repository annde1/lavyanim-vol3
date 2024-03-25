import * as React from "react";
import NavBarComponent from "../components/NavBarComponent";
import LayoutComponent from "../components/LayoutComponent";

export default function Home() {
  return (
    <>
      <LayoutComponent>
        <h1
          style={{
            textAlign: "center",
            marginTop: "3rem",
            marginBottom: "3rem",
          }}
          dir="rtl"
        >
          דף הבית
        </h1>
        <hr class="hr" />
        <h2
          dir="rtl"
          style={{
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
        >
          תחומי עיסוק
        </h2>
        <p dir="rtl">
          אנו בבן אלעזר תקשורת לווינית מתמחים בהתקנת צלחות לוויין.
        </p>
        <p dir="rtl">בעלי ותק בתחום התקשורת הלווינית של 20 שנה</p>
        <p dir="rtl">
          בעלי ותק בתחום תיקון מכשור אלקטרוני עדין ומכשור רפואי מעל ל-30 שנה.
        </p>
        <hr class="hr" style={{ marginTop: "2rem" }} />
        <h2
          dir="rtl"
          style={{
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
        >
          מוצרים מומלצים
        </h2>
      </LayoutComponent>
    </>
  );
}
