import "./search-box.styles.css";

const SearchBox = ({ placeHolder, className, onChangeHandler }) => (
  <div>
    <input
      className={className}
      type='search'
      placeholder={placeHolder}
      onChange={onChangeHandler}
    />
  </div>
);

export default SearchBox;
