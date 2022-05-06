import React from "react";
import Header from "~/components/Layout/components/Header";
import Sidebar from "./Sidebar/Sidebar";
import styles from "./DefaultLayout.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <Sidebar />
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
