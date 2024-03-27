import React from "react";
import LayoutComponent from "../components/LayoutComponent";
import { Link } from "gatsby";
const Accessibility = () => {
  return (
    <>
      <LayoutComponent>
        <div dir="rtl" style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
          <h1 dir="rtl" style={{ marginTop: "2rem" }}>
            הצהרת נגישות
          </h1>
          <p>
            בדף זה אפרט על הכלים והשיטות בהן השתמשתי להנגשת האתר וכן הסבר איך
            לפנות אלי אם יש צורך בתיקון תקלה או שיפור הנגישות.
          </p>
          <h2>האתר הונגש באופן הבא:</h2>
          <ol>
            <li>
              התאמת האתר לכל סוגי הדפדפנים המודרניים (כלומר כולם חוץ מאינטרנט
              אקספלורר).
            </li>
            <li>התאמת האתר לכל סוגי הפלטפורמות – מובייל, טבלטים ודסקטופים.</li>
          </ol>
          <h2>על מנת להנגיש את האתר ותכניו, נעשו השינויים הבאים:</h2>
          <p>
            שינויים ובדיקות באתר על מנת שיתאים לכל הדפדפנים ולכל הפלטפורמות
            (ריספונסיביות).
          </p>
          <h2>הכלים בהם השתמשתי לבדיקת הנגישות הם:</h2>
          <ol>
            <li>
              <a href="https://www.w3.org/TR/WCAG20/">
                תקן הנגישות עצמו כפי שמפורט באתר ה-W3C.
              </a>
            </li>
            <li>
              <a href="https://www.aisrael.org/?CategoryID=2764&ArticleID=51206">
                קריטריוני הבדיקה כפי שמופיעים באתר הנגישות הישראלי .
              </a>
            </li>
            <li>
              <a href="https://developer.chrome.com/docs/lighthouse/overview/">
                Google Lighthouse
              </a>
            </li>
          </ol>
          <p>
            במידה ויש בעיות נגישות, אשמח מאוד אם יפנו אלי. ניתן לפנות אלי
            באמצעות המייל: annadepta61@gmail.com או בטל' מס 054-5346822
          </p>
        </div>
      </LayoutComponent>
    </>
  );
};

export default Accessibility;
