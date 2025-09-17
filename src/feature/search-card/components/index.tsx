import { ITEMS_TYPE, TAB_KEYS } from "../constants";
import "../css/search-card.css";
import SearchRow from "./search-row";
import { useEffect, useRef, useState } from "react";
import TabsList from "./tabs-list";
import FolderFile from "./row-items/folder-file";
import { getDummyData } from "../services";
import { LIST_DATA } from "../constants/list-data";
import { FolderFileType, PersonType } from "../types";
import { useDebounce } from "../../../hooks/use-debounce";
import Person from "./row-items/person";
import Skeleton from "react-loading-skeleton";
const SearchCard = () => {
  const isTouched = useRef(false);
  const [searchValue, setSearchValue] = useState("");
  const [activeTab, setActiveTab] = useState(TAB_KEYS.ALL);
  const { debounceValue } = useDebounce({
    value: searchValue,
    delay: 1000,
  });
  const { debounceValue: debounceActiveTab } = useDebounce({
    value: activeTab,
    delay: 300,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [counts, setCounts] = useState<{
    [key: string]: number;
  }>({});
  const [results, setResults] = useState<typeof LIST_DATA>([]);
  const ref = useRef<HTMLInputElement>(null);

  const handleGetDummyData = async () => {
    setIsLoading(true);
    try {
      const res = await getDummyData({
        search: debounceValue,
        type: activeTab === TAB_KEYS.ALL ? "" : activeTab,
      });
      setCounts({
        [TAB_KEYS.ALL]: 200,
        [ITEMS_TYPE.FILE]: 60,
        [ITEMS_TYPE.FOLDER]: 60,
        [ITEMS_TYPE.PEOPLE]: 60,
      });
      console.log({ res });
      setResults(res as typeof LIST_DATA);
    } catch (err) {
      console.error({ err });
    } finally {
      setIsLoading(false);
    }
  };

  const getComponentToRender = () => {
    if (isLoading) {
      return (
        <div className="skeleton-wrapper">
          {Array.from({ length: 5 }).map(() => {
            const id = crypto.randomUUID();
            return (
              <Skeleton
                key={id}
                height={65}
                containerClassName="flex-1"
                borderRadius={12}
              />
            );
          })}
        </div>
      );
    }
    if (!results.length) {
      return "Result not found.";
    }
    return results.map((item) => {
      const isPeople = item.type === ITEMS_TYPE.PEOPLE;
      if (isPeople) {
        return (
          <Person key={item.type + item.title} data={item as PersonType} />
        );
      }
      return (
        <FolderFile
          key={item.type + item.title}
          data={item as FolderFileType}
        />
      );
    });
  };

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
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
  }, [debounceValue, debounceActiveTab]);

  return (
    <div className="card">
      <SearchRow
        ref={ref}
        value={searchValue}
        onChange={(e) => {
          console.log("run");
          if (!isTouched.current) isTouched.current = true;
          setSearchValue(e.target.value);
        }}
        onClearClick={() => setSearchValue("")}
      />
      <div
        className={`card-body ${isTouched.current ? "card-body-active" : ""}`}
      >
        <TabsList
          activeTab={activeTab}
          onChange={(active) => setActiveTab(active)}
          counts={counts}
        />
        <div className="tab-container">{getComponentToRender()}</div>
      </div>
    </div>
  );
};

export default SearchCard;
