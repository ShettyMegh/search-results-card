import { ITEMS_TYPE, TAB_KEYS } from "../constants";
import "../css/search-card.css";
import SearchRow from "./search-row";
import { useEffect, useRef, useState } from "react";
import TabsList from "./tabs-list";
import FolderFile from "./row-items/folder-file";
import { getDummyData } from "../services";
import { LIST_DATA } from "../constants/list-data";
import { FolderFileType } from "../types";
const SearchCard = () => {
  const [searchValue, setSearchValue] = useState("");
  const [activeTab, setActiveTab] = useState(TAB_KEYS.ALL);
  const [results, setResults] = useState<typeof LIST_DATA>([]);
  const ref = useRef<HTMLInputElement>(null);

  const handleGetDummyData = async () => {
    try {
      const res = await getDummyData(searchValue);
      console.log({ res });
      setResults(res as typeof LIST_DATA);
    } catch (err) {
      console.error({ err });
    }
  };

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

  useEffect(() => {
    handleGetDummyData();
  }, [searchValue]);

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
        className={`card-body ${
          searchValue.length ? "card-body-active" : "card-body-active"
        }`}
      >
        <TabsList
          activeTab={activeTab}
          onChange={(active) => setActiveTab(active)}
        />
        <div className="tab-container">
          {results.map((item) => {
            const isPeople = item.type === ITEMS_TYPE.PEOPLE;
            if (isPeople) {
              return "Hello";
            }
            return <FolderFile data={item as FolderFileType} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
