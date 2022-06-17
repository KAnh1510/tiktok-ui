import PropTypes from "prop-types";
import React, { useState } from "react";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import classnames from "classnames/bind";
import styles from "./Menu.module.scss";
import MenuItem from "./MenuItem";
import Header from "./Header";

const cx = classnames.bind(styles);
const defaultFn = () => {};

function Menu({
  children,
  items = [],
  hideOnClick = false,
  onChange = defaultFn,
}) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  const handleBack = () => {
    setHistory((prev) => prev.slice(0, prev.length - 1));
  };

  const renderResult = (attrs) => (
    <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
      <PopperWrapper className={cx("menu-popper")}>
        {history.length > 1 && (
          <Header title={current.title} onBack={handleBack} />
        )}
        <div className={cx("menu-scrollable")}>{renderItems()}</div>
      </PopperWrapper>
    </div>
  );

  const handleResetToFirstPage = () => {
    setHistory((prev) => prev.slice(0, 1));
  };

  return (
    <Tippy
      interactive
      offset={[12, 8]}
      delay={[0, 700]}
      hideOnClick={hideOnClick}
      placement="bottom-end"
      render={renderResult}
      onHide={handleResetToFirstPage}
    >
      {children}
    </Tippy>
  );
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  hideOnClick: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Menu;
