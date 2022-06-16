import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faEarthAsia,
  faEllipsisVertical,
  faKeyboard,
  faCoins,
  faGears,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import classnames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "~/assets/image";
import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { InboxIcon, MessageIcon, UploadIcon } from "~/components/Icons";
import Images from "~/components/Images";
import Search from "../Search";
import Routesconfig from "~/config/routes";

const cx = classnames.bind(styles);
const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: "English",
    children: {
      title: "Language",
      data: [
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Tieng Viet",
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyboard shortcut",
  },
];

function Header() {
  const currentUser = true;

  const handelMenuChange = (menuItem) => {
    // switch (menuItem.type) {
    //   case "language":
    //     //handle change language
    //     break;
    //   default:
    // }
  };

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: "View profile",
      to: "/@hoa",
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: "Get coins",
      to: "/coin",
    },
    {
      icon: <FontAwesomeIcon icon={faGears} />,
      title: "Settings",
      to: "/settings",
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: "Log out",
      to: "/logout",
      separate: true,
    },
  ];

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <Link to={Routesconfig.home} className={cx("logo-link")}>
            <img src={images.logo} alt="Tiktok" />
          </Link>
        </div>
        <Search />
        <div className={cx("action")}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 50]} content="Upload Video" placement="bottom">
                <button className={cx("action-btn")}>
                  <UploadIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 50]} content="Message" placement="bottom">
                <button className={cx("action-btn")}>
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                <button className={cx("action-btn")}>
                  <InboxIcon />
                  <span className={cx("badge")}>12</span>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Log in</Button>
            </>
          )}
          <Menu
            items={currentUser ? userMenu : MENU_ITEMS}
            onChange={handelMenuChange()}
          >
            {currentUser ? (
              <Images
                className={cx("user-avatar")}
                src="https://scontent.fhan5-7.fna.fbcdn.net/v/t39.30808-6/280867372_5027572370644546_4758362782991876074_n.jpg?_nc_cat=103&ccb=1-6&_nc_sid=8bfeb9&_nc_ohc=WLaKuPs-DfAAX9dFaDD&_nc_ht=scontent.fhan5-7.fna&oh=00_AT_JrRHLwJ9lNp1Uwh32DQbvqDf5GsuMA2rtbXMesWbpkg&oe=6287050F"
                alt="Nva"
              />
            ) : (
              <button className={cx("menu-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
