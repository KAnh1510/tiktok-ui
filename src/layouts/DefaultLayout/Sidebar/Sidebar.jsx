import React from "react";
import styles from "./Sidebar.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

function Sidebar() {
  return <div className={cx("wrapper")}>Sidebar</div>;
}

export default Sidebar;
