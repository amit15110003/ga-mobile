import React from "react";

export default function What() {
  return (
    <div>
      <ul class="nav nav-pills mb-3 p-2" id="pills-tab" role="tablist">
        <li class="nav-item col-6">
          <a
            class="th-detail-service active"
            id="pills-home-tab"
            data-toggle="pill"
            href="#pills-home"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            What’s Included
          </a>
        </li>
        <li class="nav-item col-6">
          <a
            class="th-detail-service"
            id="pills-profile-tab"
            data-toggle="pill"
            href="#pills-profile"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            What’s Excluded
          </a>
        </li>
      </ul>
      <div class="tab-content col-12" id="pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <div class="row">
            <span class="th-trip-itinerary-link col-12">
              <i class="fa fa-cutlery pr-1"></i>Accommodation
            </span>
          </div>
          <div class="row py-2">
            <span class="th-detail-card-places col-12">
              <span class="th-dot-green pr-2">&bull;</span>World Famous Everest
              Base Camp
            </span>
            <span class="th-detail-card-places col-12">
              <span class="th-dot-green pr-2">&bull;</span>Caretaker stays on
              the property
            </span>
            <span class="th-detail-card-places col-12">
              <span class="th-dot-green pr-2">&bull;</span>There are no
              restrictions on food for guests
            </span>
            <span class="th-detail-card-places col-12">
              <span class="th-dot-green pr-2">&bull;</span>World Famous Everest
              Base Camp
            </span>
            <span class="th-detail-card-places col-12">
              <span class="th-dot-green pr-2">&bull;</span>Caretaker stays on
              the property
            </span>
            <span class="th-detail-card-places col-12">
              <span class="th-dot-green pr-2">&bull;</span>There are no
              restrictions on food for guests
            </span>
          </div>
          <div class="row">
            <span class="th-trip-itinerary-link col-12">
              <i class="fa fa-cutlery pr-1"></i>Meal
            </span>
          </div>
          <div class="row py-2">
            <span class="th-detail-card-places col-12">
              <span class="th-dot-green pr-2">&bull;</span>World Famous Everest
              Base Camp
            </span>
            <span class="th-detail-card-places col-12">
              <span class="th-dot-green pr-2">&bull;</span>Caretaker stays on
              the property
            </span>
            <span class="th-detail-card-places col-12">
              <span class="th-dot-green pr-2">&bull;</span>There are no
              restrictions on food for guests
            </span>
            <span class="th-detail-card-places col-12">
              <span class="th-dot-green pr-2">&bull;</span>World Famous Everest
              Base Camp
            </span>
          </div>
          <div class="row">
            <span class="th-trip-itinerary-link col-12">
              <i class="fa fa-cutlery pr-1"></i>Transport
            </span>
          </div>
          <div class="row py-2">
            <span class="th-detail-card-places col-12">
              <span class="th-dot-green pr-2">&bull;</span>World Famous Everest
              Base Camp
            </span>
            <span class="th-detail-card-places col-12">
              <span class="th-dot-green pr-2">&bull;</span>Caretaker stays on
              the property
            </span>
            <span class="th-detail-card-places col-12">
              <span class="th-dot-green pr-2">&bull;</span>There are no
              restrictions on food for guests
            </span>
            <span class="th-detail-card-places col-12">
              <span class="th-dot-green pr-2">&bull;</span>World Famous Everest
              Base Camp
            </span>
          </div>
          <div class="row">
            <span class="th-trip-itinerary-link col-12">Others</span>
          </div>
          <div class="row py-2">
            <span class="th-detail-card-places col-12">
              <span class="th-dot-green pr-2">&bull;</span>World Famous Everest
              Base Camp
            </span>
            <span class="th-detail-card-places col-12">
              <span class="th-dot-green pr-2">&bull;</span>Caretaker stays on
              the property
            </span>
            <span class="th-detail-card-places col-12">
              <span class="th-dot-green pr-2">&bull;</span>There are no
              restrictions on food for guests
            </span>
            <span class="th-detail-card-places col-12">
              <span class="th-dot-green pr-2">&bull;</span>World Famous Everest
              Base Camp
            </span>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <div class="row">
            <span class="th-trip-itinerary-link col-12">
              <i class="fa fa-cutlery pr-1"></i>Meal
            </span>
          </div>
          <div class="row py-2">
            <span class="th-detail-card-places col-12">
              <span class="th-dot-red pr-2">&bull;</span>World Famous Everest
              Base Camp
            </span>
            <span class="th-detail-card-places col-12">
              <span class="th-dot-red pr-2">&bull;</span>Caretaker stays on the
              property
            </span>
            <span class="th-detail-card-places col-12">
              <span class="th-dot-red pr-2">&bull;</span>There are no
              restrictions on food for guests
            </span>
            <span class="th-detail-card-places col-12">
              <span class="th-dot-red pr-2">&bull;</span>World Famous Everest
              Base Camp
            </span>
          </div>
          <div class="row">
            <span class="th-trip-itinerary-link col-12">
              <i class="fa fa-cutlery pr-1"></i>Transport
            </span>
          </div>
          <div class="row py-2">
            <span class="th-detail-card-places col-12">
              <span class="th-dot-red pr-2">&bull;</span>World Famous Everest
              Base Camp
            </span>
            <span class="th-detail-card-places col-12">
              <span class="th-dot-red pr-2">&bull;</span>Caretaker stays on the
              property
            </span>
            <span class="th-detail-card-places col-12">
              <span class="th-dot-red pr-2">&bull;</span>There are no
              restrictions on food for guests
            </span>
            <span class="th-detail-card-places col-12">
              <span class="th-dot-red pr-2">&bull;</span>World Famous Everest
              Base Camp
            </span>
          </div>
          <div class="row">
            <span class="th-trip-itinerary-link col-12">Others</span>
          </div>
          <div class="row py-2">
            <span class="th-detail-card-places col-12">
              <span class="th-dot-red pr-2">&bull;</span>World Famous Everest
              Base Camp
            </span>
            <span class="th-detail-card-places col-12">
              <span class="th-dot-red pr-2">&bull;</span>Caretaker stays on the
              property
            </span>
            <span class="th-detail-card-places col-12">
              <span class="th-dot-red pr-2">&bull;</span>There are no
              restrictions on food for guests
            </span>
            <span class="th-detail-card-places col-12">
              <span class="th-dot-red pr-2">&bull;</span>World Famous Everest
              Base Camp
            </span>
          </div>
        </div>
      </div>
      <div class="container-fluid th-bg-grey mt-2">
        <div class="row p-2"></div>
      </div>
    </div>
  );
}
