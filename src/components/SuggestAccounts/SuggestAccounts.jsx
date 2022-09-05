import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames/bind";
import styles from "./SuggestAccounts.module.scss";
import AccountItem from "./AccountItem";

const cx = classNames.bind(styles);

export default function SuggestAccounts({ label }) {
  return (
    <div className={cx("wrapper")}>
      <p className={cx("label")}>{label}</p>
      <AccountItem />
      <AccountItem />
      <AccountItem />

      <p className={cx("see-all")}>See all</p>
    </div>
  );
}
SuggestAccounts.propTypes = {
  label: PropTypes.string.isRequired,
};
