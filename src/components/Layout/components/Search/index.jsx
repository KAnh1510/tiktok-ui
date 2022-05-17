import React, { useState, useEffect, useRef } from "react";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";

import HeadlessTippy from "@tippyjs/react/headless";
import classnames from "classnames/bind";
import styles from "./Search.module.scss";
import { SearchIcon } from "~/components/Icons";
const cx = classnames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(true);

  const inputRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setSearchResults([1, 2, 3]);
    }, 3000);
  }, []);

  const handleClear = () => {
    setSearchValue("");
    setSearchResults([]);
    inputRef.current.focus();
  };

  const handelHideResults = () => {
    setShowResults(false);
  };

  return (
    <HeadlessTippy
      interactive
      visible={showResults && searchResults.length > 0}
      render={(attrs) => (
        <div className={cx("search-results")} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h4 className={cx("search-titles")}>Accounts</h4>
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handelHideResults}
    >
      <div className={cx("search")}>
        <input
          ref={inputRef}
          value={searchValue}
          type="text"
          placeholder="Search account and videos"
          spellCheck={false}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setShowResults(true)}
        />
        {!!searchValue && (
          <button className={cx("clear")} onClick={handleClear}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        {/* <FontAwesomeIcon icon={faSpinner} className={cx("loading")} /> */}

        <button className={cx("search-btn")}>
          <SearchIcon />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
