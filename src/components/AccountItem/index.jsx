import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classnames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import Image from "~/components/Images";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
const cx = classnames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <Image
        className={cx("avatar")}
        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/02cda9089360645c1b1c60e1c186cc68.jpeg?x-expires=1652277600&x-signature=BskDjQq1I1Q81yoRpUFAEpdlpBs%3D"
        alt="hoa"
      />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>Nguyen Van A</span>
          <FontAwesomeIcon icon={faCircleCheck} className={cx("icon")} />
        </h4>
        <span className={cx("username")}>nguyenvana</span>
      </div>
    </div>
  );
}
export default AccountItem;
