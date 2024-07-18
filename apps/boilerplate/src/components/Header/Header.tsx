import { ContentLayout, ContentSection } from "@fluidus-ui/react";
import { Actions } from "../Actions";
import { Navigation } from "../Navigation";
import "./Header.scss";

export const Header = () => (
  <ContentLayout>
    <ContentSection className="header" size="full">
      <div className="header-content">
        <Navigation />
        <Actions />
      </div>
    </ContentSection>
  </ContentLayout>
);

export default Header;
