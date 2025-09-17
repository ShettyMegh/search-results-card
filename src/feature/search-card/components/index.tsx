import "../css/search-card.css";
import SearchRow from "./search-row";
import { useEffect, useRef, useState } from "react";
const SearchCard = () => {
  const [searchValue, setSearchValue] = useState("");
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log({ searchValue });
  }, [searchValue]);

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
        <div className="card-tabs">awdawd</div>
      </div>
    </div>
  );
};

export default SearchCard;
