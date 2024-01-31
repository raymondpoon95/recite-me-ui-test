import React from "react";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

type SearchComponentProps = {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  handleOnClickSearch: () => void;
};

const SearchComponent = ({
  searchValue,
  setSearchValue,
  handleOnClickSearch,
}: SearchComponentProps) => {
  return (
    <>
      <input
        placeholder="Search..."
        type="text"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        className="border border-slate-300 w-full p-2 rounded-md"
      />

      <div className="mt-6">
        <ButtonComponent buttonText="Search" onClick={handleOnClickSearch} />
      </div>
    </>
  );
};

export default SearchComponent;
