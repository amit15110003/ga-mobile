import React from "react";
import a from "../../../Assets/Images/Option/a.svg";
import a1 from "../../../Assets/Images/Option/a1.svg";
import b from "../../../Assets/Images/Option/b.svg";
import b1 from "../../../Assets/Images/Option/b1.svg";
import c from "../../../Assets/Images/Option/c.svg";
import c1 from "../../../Assets/Images/Option/c1.svg";
import d from "../../../Assets/Images/Option/d.svg";
import d1 from "../../../Assets/Images/Option/d1.svg";
import e from "../../../Assets/Images/Option/e.svg";
import e1 from "../../../Assets/Images/Option/e1.svg";

export default function Option() {
  return (
    <div class="container-fluid pt-3 px-0">
      <div class=" row th-row d-flex justify-content-center text-center">
        <div class=" col-2 p-0">
          <a href=" " class="th-cat-link">
            <img src={a} alt=" " class="fluid-image" />
            <p class="th-cat-name">Holidays</p>
          </a>
        </div>
        <div class=" col-2 p-0">
          <a href=" " class="th-cat-link">
            <img src={b} alt=" " class="fluid-image" />
            <p class="th-cat-name">Honeymoon</p>
          </a>
        </div>
        <div class=" col-2 p-0">
          <a href="lpnight.html" class="th-cat-link">
            <img src={c} alt=" " class="fluid-image" />
            <p class="th-cat-name">Group Tour</p>
          </a>
        </div>
        <div class=" col-2 p-0">
          <a href=" " class="th-cat-link">
            <img src={d} alt=" " class="fluid-image" />
            <p class="th-cat-name">Family Package</p>
          </a>
        </div>
        <div class=" col-2 p-0">
          <a href=" " class="th-cat-link">
            <img src={e} alt=" " class="fluid-image" />
            <p class="th-cat-name">Weekends</p>
          </a>
        </div>
      </div>
      <div class="row th-row d-flex justify-content-center text-center">
        <div class="col-2 p-0 ">
          <a href=" " class="th-cat-link">
            <img src={a1} alt=" " class="fluid-image" />
            <p class="th-cat-name">Heritage</p>
          </a>
        </div>
        <div class="col-2 p-0">
          <a href=" " class="th-cat-link">
            <img src={b1} alt=" " class="fluid-image" />
            <p class="th-cat-name">Beach</p>
          </a>
        </div>
        <div class="col-2 p-0">
          <a href=" " class="th-cat-link">
            <img src={c1} alt=" " class="fluid-image" />
            <p class="th-cat-name">Motorcycle Rent</p>
          </a>
        </div>
        <div class="col-2 p-0">
          <a href=" " class="th-cat-link">
            <img src={d1} alt=" " class="fluid-image" />
            <p class="th-cat-name">Adventure</p>
          </a>
        </div>
        <div class="col-2 p-0">
          <a href=" " class="th-cat-link">
            <img src={e1} alt=" " class="fluid-image" />
            <p class="th-cat-name">More Tour Theme</p>
          </a>
        </div>
      </div>
    </div>
  );
}
