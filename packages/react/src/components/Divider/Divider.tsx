import classNames from "classnames";
import { PropsWithChildren } from "react";
import "./Divider.scss";

export interface DividerProps extends PropsWithChildren {
  className?: string;
}

export const Divider = ({ children, className }: DividerProps) => {
  let DividerItem;

  if (children) {
    DividerItem = (
      <>
        <span className="fluidus-divider--line-left" />
        <span className="fluidus-divider--content">{children}</span>
        <span className="fluidus-divider--line-right" />
      </>
    );
  } else {
    DividerItem = <span className="fluidus-divider--line" />;
  }

  return (
    <div className={classNames("fluidus-divider", className)}>
      <div className="fluidus-divider-container">{DividerItem}</div>
    </div>
  );
};

export default Divider;
