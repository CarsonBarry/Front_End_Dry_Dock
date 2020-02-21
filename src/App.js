import React from "react";
import "./css/framework/clear.css";
import "./css/fonts.css";
import "./css/framework/flexbox.css";
import "./css/framework/grid.css";
import "./css/framework/order.css";
import "./css/framework/showhide.css";
import "./css/framework/buttons.css";
import "./css/structure.css";
import "./css/framework/quickstyles.css";
import "./css/styles.css";

export default function App() {
  

  /*/ Opens and closes Drawer /*/
  function test() {
    /*/ Targets and toggles .active on #drawer /*/
    var test = document.getElementById("drawer");
    test.classList.toggle("active");
  }

  return (
    
    /*/ Note: Only the IDs matter for this example /*/
    /*/ All relevant CSS is in "css/styles.css" /*/

    /*/ Grid Container /*/
    <div id="main" class="App font-Din">

      {/*/ Button just toggles .active on #drawer /*/}
      <button onClick={test}>Test</button>

      {/*/ Grid Item - Drawer /*/}
      <div id="drawer" class="bcolor-grey80 tcolor-white flex-jC">
        <h1>Drawer</h1>
      </div>

    </div>
  );
}
