import threeDotIcon from "../../icons/three-dot-icon.svg";

export default function createDemoPage() {
  const content = document.querySelector(".content");

  console.log("Creating demo page...");
  const demoPage = document.createElement("div");
  demoPage.classList.add("demo-page");

  demoPage.innerHTML = /* html */ `
        <div class="demo-page ">
            <div class="demo-card">
                <div class="heading">Custom Dropdown Menu</div>
                <div class="chip">Click on the Three-Dot-Menu Icon</div>
                <img class="dropdown-menu-button" src="${threeDotIcon}"> 
                <div class="credits">Made with <span>VanillaJS, by whatisaProCoder</div>
            </div>
        </div>
    `;

  content.appendChild(demoPage);
}
