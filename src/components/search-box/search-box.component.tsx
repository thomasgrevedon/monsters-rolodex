import { ChangeEvent, ChangeEventHandler, EventHandler } from "react";
import "./search-box.styles.css";

type SearchBoxProps = {
  placeholder?: string;
  className: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({ placeholder, className, onChangeHandler }: SearchBoxProps) => <input className={className} type='search' placeholder={placeholder} onChange={onChangeHandler} />;

export default SearchBox;
