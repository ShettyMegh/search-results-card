import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import React, { Ref } from "react";
import { ChangeEvent } from "react";

const SearchRow = React.forwardRef(
  (
    {
      value,
      onChange = () => null,
      onClearClick = () => null,
    }: {
      value?: string;
      onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
      onClearClick?: () => void;
    },
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <div className="card-search">
        <div className="card-search__icon">
          <MagnifyingGlassIcon
            height={28}
            width={28}
            className="text-gray card-search__icon"
          />
        </div>
        <input
          ref={ref}
          type="text"
          placeholder="Searching is easier"
          value={value}
          onChange={(e) => onChange(e)}
        />
        {value?.length ? (
          <button className="card-clear-btn" onClick={onClearClick}>
            Clear
          </button>
        ) : (
          <div className="card-search__qa">
            <div className="card-search__btn">
              <div className="card-search__btn-wrapper">
                <p className="card-search__btn-text">s</p>
              </div>
            </div>
            <p className="card-search__qa-text">quick access</p>
          </div>
        )}
      </div>
    );
  }
);

export default SearchRow;
