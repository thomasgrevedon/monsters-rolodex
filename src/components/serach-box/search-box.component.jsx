import { Component } from "react";

class SearchBox extends Component {
    render() {
        const { placeHolder, className, onChangeHandler } = this.props;
        return (
            <div>
                <input className={placeHolder} type="search" placeholder={className} onChange={onChangeHandler} />
            </div>
        );
    }
}

export default SearchBox;
