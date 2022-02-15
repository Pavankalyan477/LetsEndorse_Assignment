import React from "react";
import "./style.css";

export default function Target() {
  return (
    <div className="total">
      <div className="content">
        <div>
          <div>
            16.Market search :-
            <select name="" id="">
              <option value=" Not conducted"> Not conducted</option>
              <option value="Market research has been conducted ">
                Market research has been conducted{" "}
              </option>
            </select>
          </div>
          <p></p>
        </div>
        <div>
          <div>
            17.Primary market :-
            <select name="" id="">
              <option value="Local"> Local</option>
              <option value="Regional "> Regional</option>
              <option value="National"> National</option>
              <option value="International"> International</option>
            </select>
          </div>
          <p></p>
        </div>
        <div>
          <div>
            18.Customers :-
            <input type="text" placeholder="Customers" />
          </div>
          <p></p>
        </div>
        <div>
          <div>
            19.Seasons of high sales :-
            <select name="" id="">
              <option value="Consistent sales across all seasons">
                Consistent sales across all seasons
              </option>
              <option value="Higher sales in festive seasons">
                Higher sales in festive seasons
              </option>
              <option value="High sales in cropping/cultivation season">
                High sales in cropping/cultivation season
              </option>
              <option value="High sales in peak seasons">
                High sales in peak seasons
              </option>
            </select>
          </div>
          <p></p>
        </div>
        <div>
          <div>
            20.Competition :-
            <select name="" id="">
              <option value="No similar goods/service provider in this locality">
                No similar goods/service provider in this locality
              </option>
              <option value="Only a few similar goods/service providers in this locality">
                Only a few similar goods/service providers in this locality
              </option>
              <option value="Many similar goods/service providers in this locality">
                Many similar goods/service providers in this locality
              </option>
            </select>
          </div>
          <p></p>
        </div>
        <div>
          <div>
            21.List of Suppliers :-
            <input type="text" placeholder="Suppliers" />
          </div>
          <p></p>
        </div>
        <div>
          <div>
            22.Marketing avenues :- <br />
            <div>
              <input type="checkbox" />{" "}
              <label>
                {" "}
                Distribution of marketing material (pamphlets/flyers)
              </label>{" "}
              <br />
              <input type="checkbox" />{" "}
              <label>storefront/business branding</label>
              <br />
              <input type="checkbox" />{" "}
              <label>Seasonal discounts and offers</label>
              <br />
              <input type="checkbox" /> <label> Cross-promotion</label>
              <br />
              <input type="checkbox" /> <label> Digital Marketing</label>
              <br />
              <input type="checkbox" /> <label>Word of mouth </label>
              <br />
            </div>
          </div>
          <p></p>
        </div>
        <div>
          <div>
            23.Avenues of scaling up in future :- <br />
            <div>
              <input type="checkbox" />{" "}
              <label>increasing the variety of product/service offering</label>{" "}
              <br />
              <input type="checkbox" />{" "}
              <label>
                {" "}
                expanding the current offering to other geographies
              </label>
              <br />
              <input type="checkbox" /> <label>opening more outlets</label>
              <br />
              <input type="checkbox" />{" "}
              <label> growing the scale of operation</label>
              <br />
              <input type="checkbox" />{" "}
              <label>building value-chain integrations</label>
              <br />
              <input type="checkbox" />{" "}
              <label>other allied revenue streams</label>
              <br />
            </div>
          </div>
          <p></p>
        </div>
      </div>
      <div className="sentence">
        <div>
          <p>Pavan Kalyan</p>
        </div>
        <div>
          <p>Pavan Kalyan</p>
        </div>
        <div>
          <p>Pavan Kalyan</p>
        </div>
        <div>
          <p>Pavan Kalyan</p>
        </div>
        <div>
          <p>Pavan Kalyan</p>
        </div>
        <div>
          <p>Pavan Kalyan</p>
        </div>
        <div>
          <p>Pavan Kalyan</p>
        </div>
        <div>
          <p>Pavan Kalyan</p>
        </div>
      </div>
    </div>
  );
}
