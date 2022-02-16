import React from "react";
import { useState } from "react";
import "./style.css";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CssBaseline from "@mui/material/CssBaseline";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
export default function Location() {
  const [establish, setEstablish] = useState("");
  const [Area, setArea] = useState("");
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);
  const [reason_for_location, setreason_for_location] = useState();
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );

    setreason_for_location(
      `This locality is selected because of ${
        typeof value === "string" ? value.split(",") : value
      }.`
    );
  };
  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 2.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  const names = [
    "Nearness to market",
    "Good footfall",
    " Nearness to source of raw materials",
    "Nearness to targeted customer demographics",
    "Lesser competition around, Access to permit/license of operate",
    "Nearness to suppliers",
    " Affordability (rent)",
    "No rental overheads",
    "Other such factors",
  ];
  const Establishment = () => {
    let establishment_type = document.getElementById("Establishment").value;
    let business_locality = document.getElementById(" business_locality").value;
    let infra_ownership = document.getElementById("infra_ownership").value;
    let city = document.getElementById("city").value;
    setEstablish(
      `The ${establishment_type} is located in ${business_locality} area of ${city} in a ${infra_ownership} property.`
    );
  };

  const Established_Area = () => {
    let establishment_area =
      document.getElementById("establishment_area").value;
    if (Number(establishment_area) !== Number(0)) {
      setArea(`The size of the establishment is ${establishment_area} sq.ft.`);
    } else {
      setArea("");
    }
  };
  return (
    <div className="total">
      <div className="content">
        <Skeleton variant="h2">Fill Location Details Below</Skeleton>
        <div>
          <div className="Data">
            <div>
              10.Establishment type :-
              <select name="" id="Establishment" onChange={Establishment}>
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
              <input
                type="text"
                name=""
                id=" business_locality"
                placeholder="Name of the Area"
                onChange={Establishment}
              />
            </div>
            <p></p>
          </div>
          <div>
            <div>
              12.Locality of business :-
              <select name="" id="city" onChange={Establishment}>
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
              <select name="" id="infra_ownership" onChange={Establishment}>
                <option value="Rented">Rented</option>
                <option value="Leased">Leased</option>
                <option value="Self-owned">Self-owned</option>
              </select>
            </div>
            <p></p>
          </div>
          <div>
            <div>
              14.Establishment area (in square feet) (Enter 0 if the
              establishment area is irrelevant) :-
              <input
                type="Number"
                name=""
                id="establishment_area"
                placeholder="Established Area"
                onChange={Established_Area}
              />
            </div>
            <p></p>
          </div>
        </div>
        <div>
          <div>
            15.Reason for selecting this location :- <br />
            <div>
              <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-name-label">
                  Select Multiple
                </InputLabel>
                <Select
                  labelId="demo-multiple-name-label1"
                  id="demo-multiple-name"
                  multiple
                  value={personName}
                  onChange={handleChange}
                  input={<OutlinedInput label="Name" />}
                  MenuProps={MenuProps}
                >
                  {names.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                      style={getStyles(name, personName, theme)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
          <p></p>
        </div>
      </div>
      <div className="sentence">
        <CssBaseline />
        <Container maxWidth="sm">
          <Box sx={{}}>
            <div>
              <h2>Location</h2>
              <li>
                {establish}
                {Area} {reason_for_location}
              </li>
            </div>
          </Box>
        </Container>

        <div>
          <p></p>
        </div>
        <div>
          <p></p>
        </div>
      </div>
    </div>
  );
}
