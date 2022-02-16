import { useState, React } from "react";
import "./style.css";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Skeleton from "@mui/material/Skeleton";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
export default function Target() {
  const [market_research, setmarket_research] = useState("");
  const [primary, setPrimary] = useState("");
  const [custumer, setCustumer] = useState("");
  const [seasonality, setSeasonality] = useState("");
  const [compettion, setCompetition] = useState("");
  const [suppliers, setSuppliers] = useState("");
  const [marketing_avenues, setMarket] = useState("");
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);
  const [scaleup_potential1, setPersonName1] = useState([]);
  const [scaleup, setScaleup] = useState("");
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );

    setMarket(
      `Our marketing avenues to reach the targeted customers shall include-${
        typeof value === "string" ? value.split(",") : value
      }`
    );
  };
  const handleChange1 = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName1(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    setScaleup(
      `The various foreseeable avenues of scaling up and growing the business in the foreseeable future include- ${
        typeof value === "string" ? value.split(",") : value
      }.`
    );
  };
  const Market = () => {
    let market_research = document.getElementById("market_research").value;
    if (market_research !== "Not conducted") {
      setmarket_research(
        `${market_research} and the range of products and target market has been identified after that.`
      );
    } else {
      setmarket_research("");
    }
  };
  const Primary = () => {
    let primary_market = document.getElementById("primary_market").value;
    setPrimary(
      `The enterprise shall focus on offering its products/services to ${primary_market} markets. `
    );
  };
  const Customer = () => {
    let customers = document.getElementById("customers").value;
    setCustumer(`Our customers shall include- ${customers}`);
  };
  const Seasonality = () => {
    let seasonality = document.getElementById("seasonality").value;
    setSeasonality(
      `The nature of the business is such that we expect ${seasonality}.`
    );
  };
  const Compettion = () => {
    let competition = document.getElementById("compettion").value;
    setCompetition(`Regarding competition, there are ${competition}.`);
  };
  const Suppliers = () => {
    let suppliers = document.getElementById("suppliers").value;
    setSuppliers(
      `The enterprise shall procure goods/raw materials from ${suppliers}.`
    );
  };

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
    " Distribution of marketing material (pamphlets/flyers)",
    "storefront/business branding",
    "Seasonal discounts and offers",
    "Cross-promotion",
    " Digital Marketing",
    "Word of mouth ",
  ];
  const scaleup_potential = [
    "increasing the variety of product/service offering",
    "expanding the current offering to other geographies",
    "opening more outlets",
    "growing the scale of operation",
    "building value-chain integrations",
    "other allied revenue streams",
  ];

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
  return (
    <div className="total">
      <div className="content">
        <Skeleton variant="h2">Fill Target Details Below</Skeleton>
        <div>
          <div>
            16.Market search :-
            <select name="" id="market_research" onChange={Market}>
              <option value="Not conducted"> Not conducted</option>
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
            <select name="" id="primary_market" onChange={Primary}>
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
            <input
              type="text"
              placeholder="Customers"
              id="customers"
              onChange={Customer}
            />
          </div>
          <p></p>
        </div>
        <div>
          <div>
            19.Seasons of high sales :-
            <select name="" id="seasonality" onChange={Seasonality}>
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
            <select name="" id="compettion" onChange={Compettion}>
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
            <input
              type="text"
              placeholder="Suppliers"
              id="suppliers"
              onChange={Suppliers}
            />
          </div>
          <p></p>
        </div>
        <div>
          <div>
            22.Marketing avenues :- <br />
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
        <div>
          <div>
            23.Avenues of scaling up in future :- <br />
            <div>
              <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-name-label">
                  Select Multiple
                </InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  multiple
                  value={scaleup_potential1}
                  onChange={handleChange1}
                  input={<OutlinedInput label="Name" />}
                  MenuProps={MenuProps}
                >
                  {scaleup_potential.map((scaleup_potential) => (
                    <MenuItem
                      key={scaleup_potential}
                      value={scaleup_potential}
                      style={getStyles(
                        scaleup_potential,
                        scaleup_potential1,
                        theme
                      )}
                    >
                      {scaleup_potential}
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
          <Box>
            <div>
              <h2>Target</h2>
              <li>
                {market_research} {primary} {custumer} {seasonality}{" "}
                {compettion} {suppliers} {marketing_avenues} {scaleup}
              </li>
            </div>
          </Box>
        </Container>
      </div>
    </div>
  );
}
