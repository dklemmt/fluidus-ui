import { NavLink } from "react-router-dom";
import { ContentLayout, ContentSection, Paragraph } from "@fluidus-ui/react";
import "./Footer.scss";

export const Footer = () => (
  <footer className="footer">
    <ContentLayout>
      <ContentSection>
        {/*<Paragraph size="small">*/}
        {/*  <NavLink to="/pages/Imprint">Impressum</NavLink> |{" "}*/}
        {/*  <NavLink to="todo">Datenschutz</NavLink>*/}
        {/*</Paragraph>*/}
        <Paragraph size="xsmall">
          &copy; {new Date().getFullYear()} by Dirk Klemmt
        </Paragraph>
      </ContentSection>
    </ContentLayout>
  </footer>
);

export default Footer;
