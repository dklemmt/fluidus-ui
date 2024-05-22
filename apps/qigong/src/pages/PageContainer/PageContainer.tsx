import { PropsWithChildren, lazy } from "react";
import { ContentLayout, ScrollToTop } from "@fluidus-ui/react";
import "./PageContainer.scss";

type PageContainerProps = PropsWithChildren;

const Header = lazy(() => import("@components/Header") as never);
const Footer = lazy(() => import("@components/Footer") as never);

export const PageContainer = ({ children }: PageContainerProps) => (
  <>
    <Header />
    <main>
      <ContentLayout size="narrow-padding" className="page-container">
        {children}
      </ContentLayout>
    </main>
    <Footer />
    <ScrollToTop />
  </>
);

export default PageContainer;
