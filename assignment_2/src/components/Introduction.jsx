import React from "react";

export default function Introduction() {
  var minimum = 0;
  var maximum = 100;
  return (
    <div >
      <div>
        <div>
          1.Stage of business :-
          <select name="busines" id="business_state">
            <option value="Start-up">Start-up</option>
            <option value="Scale-up">Scale-up</option>
          </select>
        </div>
        <p></p>
      </div>
      <div>
        <div>
          2.Age of establishment (years) (Enter 0 if it is yet to start-up) :-
          <input type="Number" min={minimum} max={maximum} placeholder="Age" />
        </div>
        <p></p>
      </div>
      <div>
        <div>
          3.Primary Products/Services offfered :-
          <input type="Text" placeholder="Primary Products/Services offered" />
        </div>
        <p></p>
      </div>
      <div>
        <div>
          4.Offered to :-
          <select name="offers" id="offered_to">
            <option value="End customers">End customers</option>
            <option value="Wholesalers">Wholesalers</option>
            <option value="Distributors">Distributors</option>
            <option value="Retailers">Retailers</option>
          </select>
        </div>
        <p></p>
      </div>
      <div>
        <div>
          5.Secondary Products/Services offfered :-
          <input
            type="Text"
            placeholder="Secondary Products/Services offered"
          />
        </div>
        <p></p>
      </div>
      <div>
        <div>
          6.Processed products (Products you produce from the raw materials) :-
          <input type="Text" placeholder="Processed Products" />
        </div>
        <p></p>
      </div>
      <div>
        <div>
          7.Years of relevant experience in this field :-
          <input type="Number" placeholder="Experience" />
        </div>
        <p></p>
      </div>
      <div>
        <div>
          8.Skill training :-
          <select name="skill" id="skill">
            <option value="no_skill">No formal skill Training</option>
            <option value="Has_skill">
              Has formal skill Training and Certificate
            </option>
          </select>
        </div>
        <p></p>
      </div>
      <div>
        <div>
          9.Unique Selling Proposition :- <br />
          <div>
            <input type="checkbox" />{" "}
            <label>The Enterprenuer's experience in this field</label> <br />
            <input type="checkbox" /> <label>innovative product/service</label>
            <br />
            <input type="checkbox" /> <label>high profit margin</label>
            <br />
            <input type="checkbox" /> <label> high growth potential</label>
            <br />
            <input type="checkbox" /> <label> superior customer support</label>
            <br />
            <input type="checkbox" />{" "}
            <label>quality and affordable products/service</label>
            <br />
            <input type="checkbox" />{" "}
            <label>high demand in the target market (forward linkage)</label>
            <br />
            <input type="checkbox" />{" "}
            <label>abundant supply of raw materials (backward linkage)</label>
            <br />
            <input type="checkbox" />{" "}
            <label>wide range of products/services</label>
            <br />
            <input type="checkbox" />{" "}
            <label>robust value-chain of the business</label>
            <br />
            <input type="checkbox" />{" "}
            <label>frequency of customer visits</label>
            <br />
          </div>
        </div>
        <p></p>
      </div>
    </div>
  );
}
