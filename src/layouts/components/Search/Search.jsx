import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import HeadlessTippy from "@tippyjs/react/headless";
import classnames from "classnames/bind";

import * as searchServices from "~/services/searchService";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import styles from "./Search.module.scss";
import { SearchIcon } from "~/components/Icons";
import { useDebounce } from "~/hooks";

const cx = classnames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);

  const debouncedValue = useDebounce(searchValue, 500);

  const inputRef = useRef();

  useEffect(() => {
    if (!debouncedValue.trim()) {
      setSearchResults([]);
      return;
    }

    const fetchApi = async () => {
      setLoading(true);

      const result = await searchServices.search(debouncedValue);
      setSearchResults(result);

      setLoading(false);
    };

    fetchApi();
  }, [debouncedValue]);

  const handleClear = () => {
    setSearchValue("");
    setSearchResults([]);
    inputRef.current.focus();
  };

  const handelHideResults = () => {
    setShowResults(false);
  };

  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(" ")) {
      setSearchValue(searchValue);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    //Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.
    <div>
      <HeadlessTippy
        interactive
        appendTo={() => document.body}
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
            onChange={handleChange}
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

          <button className={cx("search-btn")} onMouseDown={handleSubmit}>
            <SearchIcon />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default Search;
