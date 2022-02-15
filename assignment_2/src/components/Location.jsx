import React from "react";
import "./style.css";

export default function Location() {
  return (
    <div className="total">
      <div className="content">
        <div>
          <div>
            10.Establishment type :-
            <select name="" id="">
              <option value="Factory">Factory</option>
              <option value="Mill">Mill</option>
              <option value="Stall">Stall</option>
              <option value="Workshop">Workshop</option>
              <option value="Boutique">Boutique</option>
              <option value="Vehicle">Vehicle</option>
              <option value="Centre">Centre</option>
              <option value="Store">Store</option>
              <option value="Farm">Farm</option>
              <option value="Plant">Plant</option>
              <option value="Processing Unit">Processing Unit</option>
              <option value="Shop">Shop</option>
              <option value="Vending cart">Vending cart</option>
              <option value="Manufacturing unit">Manufacturing unit</option>
            </select>
          </div>
          <p></p>
        </div>
        <div>
          <div>
            11.Name of the area :-
            <input type="text" name="" id="" placeholder="Name of the Area" />
          </div>
          <p></p>
        </div>
        <div>
          <div>
            12.Locality of business :-
            <select name="" id="">
              <option value="Urban">Urban</option>
              <option value="Rural">Rural</option>
              <option value="Semi-urban">Semi-urban</option>
              <option value="Slum">Slum</option>
            </select>
          </div>
          <p></p>
        </div>
        <div>
          <div>
            13.Ownership of infrastructure :-
            <select name="" id="">
              <option value="Rented">Rented</option>
              <option value="Leased">Leased</option>
              <option value="Self-owned">Self-owned</option>
            </select>
          </div>
          <p></p>
        </div>
        <div>
          <div>
            14.Establishment area (in square feet) (Enter 0 if the establishment
            area is irrelevant) :-
            <input type="Number" name="" id="" placeholder="Established Area" />
          </div>
          <p></p>
        </div>
        <div>
          <div>
            15.Reason for selecting this location :- <br />
            <div>
              <input type="checkbox" /> <label>Nearness to market</label> <br />
              <input type="checkbox" /> <label>Good footfall</label>
              <br />
              <input type="checkbox" />{" "}
              <label>Nearness to source of raw materials</label>
              <br />
              <input type="checkbox" />{" "}
              <label> Nearness to targeted customer demographics</label>
              <br />
              <input type="checkbox" />{" "}
              <label> Lesser competition around</label>
              <br />
              <input type="checkbox" />{" "}
              <label>Access to permit/license of operate</label>
              <br />
              <input type="checkbox" /> <label> Affordability (rent)</label>
              <br />
              <input type="checkbox" /> <label>No rental overheads</label>
              <br />
              <input type="checkbox" /> <label>Other such factors</label>
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
      </div>
    </div>
  );
}
