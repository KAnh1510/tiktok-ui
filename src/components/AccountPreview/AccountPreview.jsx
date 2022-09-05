import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import Button from "../Button";
import styles from "./AccountPreview.module.scss";

const cx = classNames.bind(styles);

function AccountPreview() {
  return (
    <div className={cx("wrapper")}>
      <header className={cx("header")}>
        <img
          className={cx("avatar")}
          src="https://yt3.ggpht.com/wgneNTiW753q5G6XMnjyNLAzReR4TVFJryTKTpIqJefrKMyhABPwfnyNWIoT5NNGstFlva1tgw=s88-c-k-c0x00ffffff-no-rj"
          alt=""
        />
        <Button primary className={cx("btn-follow")}>
          Follow
        </Button>
      </header>

      <div className={cx("body")}>
        <p className={cx("nickname")}>
          <strong> User Name</strong>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </p>
        <p className={cx("name")}>Name</p>
        <p className={cx("analytics")}>
          <strong className={cx("value")}>8.9M </strong>
          <span className={cx("label")}>Followers</span>
          <strong className={cx("value")}>8.9M </strong>
          <span className={cx("label")}>Likes</span>
        </p>
      </div>
    </div>
  );
}

export default AccountPreview;
