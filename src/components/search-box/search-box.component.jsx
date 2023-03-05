import { Component } from "react";
import "./search-box.styles.css";

class SearchBox extends Component {
  render() {
    const { placeHolder, className, onChangeHandler } = this.props;
    return (
      <div>
        <input
          className={className}
          type='search'
          placeholder={placeHolder}
          onChange={onChangeHandler}
        />
      </div>
    );
  }
}

export default SearchBox;
