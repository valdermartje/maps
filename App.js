import React from "react";

import iphone from "./img/iphone.png";
import Footer from "./js/footer";
import Menu from "./js/menu";
import Mobile from "./js/mobileCard";
import "./style/alerts.css";
import "./style/stylesheet.css";
// import macbook from './img/macbook.png';
class App extends React.Component {
  render() {
    return (
      <div>
        <Menu />

        <div className={"container"}>
          <div id={"error"} />  

          <Mobile
            header={"Uw Locatie"}
            text={
              "Maps is een applicatie gemaakt door Valdemar Vreeman. De applicatie gebruikt uw locatie om met die gegevens bepaalde locaties in uw buurt te zoeken. Waar u eventueel naartoe kunt gaan."
            }
            device={iphone}
          />
        </div>

        <Footer color={"#1D1D1D"} />
      </div>
    );
  }
}

export default App;
