import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import HeadlessTippy from "@tippyjs/react/headless";
import classnames from "classnames/bind";

import * as searchServices from "~/apiServices/searchServices";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import styles from "./Search.module.scss";
import { SearchIcon } from "~/components/Icons";
import { useDebounce } from "~/components/hooks";

const cx = classnames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(true);
  const [loading, setLoading] = useState(false);

  const debounced = useDebounce(searchValue, 500);

  const inputRef = useRef();

  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResults([]);
      return;
    }

    const fetchApi = async () => {
      setLoading(true);

      const result = await searchServices.search(debounced);
      setSearchResults(result);

      setLoading(false);
    };

    fetchApi();
  }, [debounced]);

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
            {searchResults.map((result) => (
              <AccountItem key={result.id} data={result} />
            ))}
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
        {!!searchValue && !loading && (
          <button className={cx("clear")} onClick={handleClear}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        {loading && (
          <FontAwesomeIcon icon={faSpinner} className={cx("loading")} />
        )}

        <button className={cx("search-btn")}>
          <SearchIcon />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
