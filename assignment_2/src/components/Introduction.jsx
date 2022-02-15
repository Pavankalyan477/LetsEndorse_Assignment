import React from "react";
import { useState } from "react";
import "./style.css";

export default function Introduction() {
  var name = "Pavan Kalyan";
  var business_idea = "Developing Innovation thoughts ";
  //var city = "Bangalore";
  // const [business_stage, setbusiness_stage] = useState("");
  const [businesss, setBusinesss] = useState("");
  // const [age_of_establishment,setAge_of_establishment]=useState()
  const [age, setAge] = useState("");
  const [product,setProduct]= useState("");
  const [servies,setServies]= useState(null);
  const [ processed , setProcessed]= useState(null);
  const [relevant , setrelevant]= useState();
  const [skill, setSkill]= useState("");
  const business = () => {
    let setbusiness_stage=(document.getElementById("business_state").value);
    setBusinesss(
      `${name} is looking to ${setbusiness_stage} their business of ${business_idea}.`
    );
  };

  const Establish_Age=()=>{
  let age_of_establishment=document.getElementById("AGE").value
  if(Number(age_of_establishment)!==0){
    setAge(`This enterprise has been operational since ${age_of_establishment} years and has been serving its customers since then.`)
  }else{
    setAge("");
    }
   

  }
  const Products=()=>{
    let primary_product_service_offered = document.getElementById("Product").value;
    let offered_to = document.getElementById("offered_to").value
    setProduct(`This establishment offers products/services like- ${primary_product_service_offered} to ${offered_to}.`)

  }
  const Servies=()=>{
    let secondary_product_service_offered = document.getElementById("Secondary Products/Services offered").value
    if((secondary_product_service_offered )!==""){
    setServies(`In addition, the enterprise shall also be involved in- ${secondary_product_service_offered}`)
  }
  else{
    setServies("");
  }
  }

  const Processed=()=>{
    let processed_products =document.getElementById("processed_products").value;
    if(processed_products!==""){
    setProcessed(`Other products of the enterprise shall include- ${processed_products}`)
  }else{
    setProcessed("");
  }
}
 
  const  Relevant=()=>{
    let  relevant_experience =document.getElementById("relevant_experience").value;
    if(Number(relevant_experience)!==0){
    setrelevant(`${name} has relevant experience of ${relevant_experience} years in this field. `)
  }else{
    setrelevant("");
  }
}

  const Skill=()=>{
    let skill_training = document.getElementById("skill").value
    if(skill_training!=="No formal skill Training"){
    setSkill(`The entrepreneur ${skill_training} in this field of work.`)
  }else{
    setSkill("")
  }
}
  return (
    <div className="total">
      <div className="content">
        <div>
          <div>
            1.Stage of business :-
            <select onChange={business} name="busines" id="business_state">
              <option value="Start-up">Start-up</option>
              <option value="Scale-up">Scale-up</option>
            </select>
          </div>
        </div>
        <div>
          <div>
            2.Age of establishment (years) (Enter 0 if it is yet to start-up) :-
            <input type="Number" onChange={Establish_Age} id="AGE" min={0} max={100} placeholder="Age" />
          </div>
          <p></p>
        </div>
        <div>
          <div>
            3.Primary Products/Services offfered :-
            <input
              type="Text"
              id="Product"
              placeholder="Primary Products/Services offered"
              onChange={Products}
            />
          </div>
          <p></p>
        </div>
        <div>
          <div>
            4.Offered to :-
            <select name="offers" id="offered_to" onChange={Products}>
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
              id="Secondary Products/Services offered"
              onChange={Servies}
            />
          </div>
          <p></p>
        </div>
        <div>
          <div>
            6.Processed products (Products you produce from the raw materials)
            :-
            <input type="Text" placeholder="Processed_Products" id="processed_products" onChange={Processed} />
          </div>
          <p></p>
        </div>
        <div>
          <div>
            7.Years of relevant experience in this field :-
            <input type="Number" placeholder="Experience" id="relevant_experience" onChange={Relevant}/>
          </div>
          <p></p>
        </div>
        <div>
          <div>
            8.Skill training :-
            <select name="skill" id="skill" onChange={Skill}>
              <option value="No formal skill Training">No formal skill Training</option>
              <option value=" Has formal skill Training and Certificate">
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
              <input type="checkbox" />{" "}
              <label>innovative product/service</label>
              <br />
              <input type="checkbox" /> <label>high profit margin</label>
              <br />
              <input type="checkbox" /> <label> high growth potential</label>
              <br />
              <input type="checkbox" />{" "}
              <label> superior customer support</label>
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
      <div className="sentence">
        <div>
          <p id="bsines">{businesss}</p>
        </div>
        <div>
          <p id="bsines">{age}</p>
        </div>
        <div>
          <p id="bsines">{product}</p>
        </div>
        <div>
          <p id="bsines">{servies}</p>
        </div>
        <div>
          <p id="bsines">{processed}</p>
        </div>
        <div>
          <p id="bsines">{relevant}</p>
        </div>
        <div>
          <p id="bsines">{skill}</p>
        </div>
        <div>
          <p id="bsines">{}</p>
        </div>
        <div>
          <p id="bsines">{}</p>
        </div>
      </div>
    </div>
  );
}
