import { ContentLayout, Spinner } from "@fluidus-ui/react";
import "./Fallback.scss";

export const Fallback = () => (
  <ContentLayout>
    <div className="fallback-container">
      <Spinner />
    </div>
  </ContentLayout>
);

export default Fallback;
