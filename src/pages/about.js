import React from "react";
import LayoutComponent from "../components/LayoutComponent";
import { graphql } from "gatsby";
const About = ({ data }) => {
  return (
    <LayoutComponent>
      <h1
        dir="rtl"
        style={{
          textAlign: "center",
          marginTop: "3rem",
          marginBottom: "3rem",
        }}
      >
        אודות
      </h1>{" "}
      <div dir="rtl" style={{ fontSize: "1.2rem" }}>
        <p>
          אנו בעלי ותק של שני עשורים בתחום, מספקים שרות וציוד למתקינים וללקוחות
          פרטיים כאחד בכל רחבי הארץ.
        </p>
        <p>
          האתר משמש כקטלוג ובכדי לבצע הזמנה יש ליצור עימנו קשר טל' 052-8785050.
        </p>
        <p>
          אנו מתמחים בספק ציוד תקשורת ושירותים עבור חברות, מוסדות ולקוחות
          פרטיים. עם ניסיון רחב ואמינות מוכרת בתעשייה, אנו מספקים פתרונות
          מתקדמים ומקצועיים לכל צרכי התקשורת שלכם.
        </p>
        <p>
          הצוות שלנו מקצועי ומוכשר, ומחויב לספק לכם שירות מצוין ולתת מענה לכל
          שאלה או בקשה שיש לכם.
        </p>
        <p>
          אנו זמינים לכל שאלה או בקשה בכל עת, נשמח לעמוד לרשותכם ולסייע בכל מה
          שניתן.
        </p>
      </div>
    </LayoutComponent>
  );
};
export default About;
export const aboutQuery = graphql`
  query {
    allFile(filter: { absolutePath: { regex: "/src/images/about/" } }) {
      nodes {
        childrenImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: NONE)
        }
      }
    }
  }
`;
