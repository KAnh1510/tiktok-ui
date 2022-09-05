import React from "react";
import styles from "./Sidebar.module.scss";
import classnames from "classnames/bind";
import Menu, { MenuItem } from "./Menu";
import config from "~/config";
import {
  HomeActiveIcon,
  HomeIcon,
  LiveActiveIcon,
  LiveIcon,
  UserGroupActiveIcon,
  UserGroupIcon,
} from "~/components/Icons";
import SuggestAccounts from "~/components/SuggestAccounts";

const cx = classnames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx("wrapper")}>
      <Menu>
        <MenuItem
          title="For You"
          to={config.routes.home}
          icon={<HomeIcon />}
          activeIcon={<HomeActiveIcon />}
        />
        <MenuItem
          title="Following"
          to={config.routes.following}
          icon={<UserGroupIcon />}
          activeIcon={<UserGroupActiveIcon />}
        />
        <MenuItem
          title="LIVE"
          to={config.routes.live}
          icon={<LiveIcon />}
          activeIcon={<LiveActiveIcon />}
        />
      </Menu>
      <SuggestAccounts label="Suggested Accounts" />
      <SuggestAccounts label="Following Accounts" />
    </aside>
  );
}

export default Sidebar;
