import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div class="container">
        <a href="searchdest.html">
          <div class="col-12 p-1 my-2 th-searchbar My-2">
            <div class="row px-3">
              <div class="col-9 p-0 ">
                <input
                  class="form-control form-control-xs th-searchbar-input"
                  type="search"
                  placeholder="Destination, budget, Duration, theme.."
                  height="43px"
                  width="334px"
                />
              </div>
              <div class="col-3 p-0">
                <button class="btn th-searchbar-btn col-12" type="submit">
                  Search
                </button>
              </div>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default SearchBar;
