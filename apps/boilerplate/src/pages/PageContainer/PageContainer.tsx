import { lazy } from "react";
import { Outlet } from "react-router-dom";
import { ContentLayout, ScrollToTop } from "@fluidus-ui/react";
import "./PageContainer.scss";

const Header = lazy(() => import("@components/Header") as never);
const Footer = lazy(() => import("@components/Footer") as never);

export const PageContainer = () => (
  <>
    <Header />
    <main className="page-container">
      <Outlet />
    </main>
    <Footer />
    <ScrollToTop />
  </>
);

export default PageContainer;
