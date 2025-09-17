import { TAB_KEYS } from "../constants";
import "../css/search-card.css";
import SearchRow from "./search-row";
import { useEffect, useRef, useState } from "react";
import TabsList from "./tabs-list";
import FolderFile from "./row-items/folder-file";
const SearchCard = () => {
  const [searchValue, setSearchValue] = useState("");
  const [activeTab, setActiveTab] = useState(TAB_KEYS.ALL);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      console.log(e);
      if (
        (e.key === "s" || e.key === "S") &&
        document.activeElement !== ref.current
      ) {
        e.stopPropagation();
        e.preventDefault();
        ref.current?.focus();
      }
    };
    addEventListener("keydown", handleKeydown);

    return () => {
      removeEventListener("keydown", handleKeydown);
    };
  }, []);
  return (
    <div className="card">
      <SearchRow
        ref={ref}
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        onClearClick={() => setSearchValue("")}
      />
      <div
        className={`card-body ${searchValue.length ? "card-body-active" : ""}`}
      >
        <TabsList
          activeTab={activeTab}
          onChange={(active) => setActiveTab(active)}
        />
        <div className="tab-container">
          <FolderFile isFolder />
          <FolderFile />
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
