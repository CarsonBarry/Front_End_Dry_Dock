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
import "./css/framework/drydock.css";

export default function App() {
  /*/ Opens Site /*/
  function openSite() {
    /*/ Calls functions that open site/*/
    splashToSidebar();
    contentDrawer();
    footerDrawer();
    mugshotDrawer();
    navbarToSidebar();
  }

  /*/ Condenses splash screen to sidebar /*/
  function splashToSidebar() {
    /*/ Targets and toggles .sidebar on #splash /*/
    var toggle = document.getElementById("splash");
    toggle.classList.toggle("sidebar");
  }

  /*/ Expands content from 0px wide /*/
  function contentDrawer() {
    /*/ Targets and toggles .sidebar on #splash /*/
    var toggle = document.getElementById("content");
    toggle.classList.toggle("active");
  }

  /*/ Opens and closes Drawer /*/
  function footerDrawer() {
    /*/ Targets and toggles .active on #drawer /*/
    var toggle = document.getElementById("footer");
    toggle.classList.toggle("active");
  }

  /*/ Opens and closes Drawer /*/
  function mugshotDrawer() {
    /*/ Targets and toggles .active on #drawer /*/
    var toggle = document.getElementById("mugshotplaceholder");
    toggle.classList.toggle("active");
  }

  /*/ Places Navbar content in Sidebar Area/*/
  function navbarToSidebar() {
    /*/ Targets and toggles .active/.hidden/.sidebar on #drawer /*/
    var toggle = document.getElementById("navbar");
    toggle.classList.toggle("active");
    toggle.classList.toggle("sidebar");
  }

  /*/ Condenses the Sidebar further /*/
  function condenseSidebar() {
    var splash = document.getElementById("splash");
    var mug = document.getElementById("mugshotplaceholder");
    splash.classList.toggle("condensed");
    mug.classList.toggle("condensed");

    
    var content = document.getElementById("content");
    content.classList.toggle("expanded");
    /*/  /*/
  }

  function test() {
    /*/ Targets and toggles .active on  /*/
    var toggle = document.getElementById("elementID");
    toggle.classList.toggle("active");
  }

  return (
    <div id="drydockframe" class="">
      <div class="drydockpanel flex-jS">
        <button class="drydockbutton" onClick={splashToSidebar}>
          Splash
        </button>
        <button class="drydockbutton" onClick={contentDrawer}>
          Content Drawer
        </button>
        <button class="drydockbutton" onClick={footerDrawer}>
          Footer Drawer
        </button>
        <button class="drydockbutton" onClick={openSite}>
          Open Site
        </button>
        <button class="drydockbutton" onClick={mugshotDrawer}>
          Mugshot
        </button>
        <button class="drydockbutton" onClick={navbarToSidebar}>
          SideNav
        </button>
        <button class="drydockbutton" onClick={condenseSidebar}>
          Condense Sidebar
        </button>
        <button class="drydockbutton" onClick={test}>
          Test
        </button>
      </div>

      {/*/ Grid Container /*/}
      <div id="main" class="App font-Din">
        {/*/ Grid Item - Splash Screen /*/}
        <div id="splash" class="bcolor-grey90 tcolor-white flex-jC-aiC">
          <h1>Splash</h1>
        </div>

        <div id="mugshotplaceholder" />

        <div id="navbar" class=" flex-R-W-jS-aiC">
          <button class="navbutton">Home</button>
          <button class="navbutton">About</button>
          <button class="navbutton">Content</button>
        </div>

        {/*/ Grid Item - Content Area /*/}
        <div id="content" class="bcolor-grey70 tcolor-white flex-jC-aiC">
          <h1>Content</h1>
        </div>

        {/*/ Grid Item - Drawer /*/}
        <div id="footer" class="bcolor-grey80 tcolor-white flex-jC-aiC">
          <h1>Footer</h1>
        </div>
      </div>
    </div>
  );
}
