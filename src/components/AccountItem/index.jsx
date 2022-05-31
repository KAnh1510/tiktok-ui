import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import classnames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import Image from "~/components/Images";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
const cx = classnames.bind(styles);

function AccountItem({ data }) {
  return (
    <Link to={`/@${data.nickname}`} className={cx("wrapper")}>
      <Image className={cx("avatar")} src={data.avatar} alt={data.full_name} />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>{data.full_name}</span>
          {data.tick && (
            <FontAwesomeIcon icon={faCircleCheck} className={cx("icon")} />
          )}
        </h4>
        <span className={cx("username")}>{data.nickname}</span>
      </div>
    </Link>
  );
}
export default AccountItem;
