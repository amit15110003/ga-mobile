import React, { Component } from "react";
import PackageCard from "../../Cards/PackageCard";
import data from "../../DetailPage/PackageType/Data";
const PackageGrid = data.array.map((item, index) => {
  return (
    <PackageCard
      header={item.header}
      city={item.city}
      dine={item.dine}
      day={item.day}
      duration={item.duration}
    />
  );
});

class Card extends Component {
  state = {
    show: false
  };

  toggleShow = () => {
    this.setState({
      show: !this.state.show
    });
  };

  render() {
    return (
      <div>
        <div class="th-detail-budget py-2 px-3 mt-2">
          <div class="th-detail-budget-head px-0" id="budget-1">
            <h2 class="mb-0">
              <button
                class="btn th-detail-budget-link px-0 col-12"
                type="button"
                data-toggle="collapse"
                data-target="#budgetcol-1"
                aria-expanded="true"
                aria-controls="budgetcol-1"
              >
                <div class="container">
                  <div class="row">
                    <div class="col-12">
                      <div class="row">
                        <span class="th-budget-head col-11 px-0 text-left">
                          {this.props.header}
                        </span>
                        <div class="col-1 px-0">
                          <label class="th-checkbox">
                            <input type="checkbox" />
                            {/* toggle */}
                            <span
                              class="checkmark"
                              onClick={this.toggleShow}
                            ></span>
                            {/*  */}
                          </label>
                        </div>
                      </div>
                      <div class="row">
                        <span class="th-budget-package-price">
                          {this.props.price}
                        </span>
                        <span class="th-budget-pack-cost-strike pt-2 pl-1">
                          {this.props.oldPrice}
                        </span>
                        <span class="th-off-price pt-2 px-1">
                          {this.props.tag}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </h2>
          </div>
        </div>

        {this.state.show ? (
          <div>
            <div class="col-12 px-0 py-2">
              <span class="th-detail-card-places">{data.budget}</span>
            </div>
            {PackageGrid}
          </div>
        ) : null}
      </div>
    );
  }
}

export default Card;
