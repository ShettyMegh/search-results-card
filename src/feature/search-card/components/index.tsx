import "../css/search-card.css";
import SearchRow from "./search-row";
import { useEffect, useState } from "react";
const SearchCard = () => {
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    console.log({ searchValue });
  }, [searchValue]);
  return (
    <div className="card">
      <SearchRow
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
