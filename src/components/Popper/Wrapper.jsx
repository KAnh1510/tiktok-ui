import React from "react";
import classnames from "classnames/bind";
import styles from "./Popper.module.scss";

const cx = classnames.bind(styles);

function Wrapper({ children, className }) {
  return <div className={cx("wrapper", className)}> {children}</div>;
}

export default Wrapper;
