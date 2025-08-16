import threeDotIcon from "../../icons/three-dot-icon.svg";
import { ActionItem, CustomDropDownMenu } from "../components/drop_down_menu";

export default function createDemoPage() {
  const content = document.querySelector(".content");

  console.log("Creating demo page...");
  const demoPage = document.createElement("div");
  demoPage.classList.add("demo-page");
  demoPage.classList.add(
    "flex",
    "items-center",
    "justify-center",
    "h-screen",
    "w-screen",
    "bg-[#E1E1E1]",
  );

  demoPage.innerHTML = /* html */ `
        <div class="demo-card flex flex-col items-center gap-1 border-1 border-[#d7d7d7] bg-[#f5f5f5] rounded-md shadow-[0px_46px_130px_rgba(0,0,0,15%)]">
            <div class="border-b-1 border-b-[#D7D7D7] px-10 py-4 text-3xl text-center font-semibold w-max">Custom Dropdown Menu</div>
            <div class="mt-6 bg-[#AC1CFF] p-1 px-2 rounded-md text-[#F5E4F5] font-semibold text-s">Click on the Three-Dot-Menu Icon</div>
            <img id="three-dot-menu-button" class="h-12 w-12 bg-[#E1E1E1] mt-12 p-2 rounded-full hover:bg-[#D7D7D7] active:bg-[#CDCDCD] transition" src="${threeDotIcon}"> 
            <div class="credits mt-12 mb-4">Made with <span class="text-[#FF9500] font-medium">VanillaJS</span>, by <a href="https://github.com/whatisaProCoder" target="_blank" class="text-[#6E88FB] font-medium hover:underline">whatisaProCoder</a></div>
        </div>
    `;

  content.appendChild(demoPage);

  const menu = new CustomDropDownMenu({
    menuTitle: "Menu",
    triggerElementID: "three-dot-menu-button",
    actionItemArray: [
      new ActionItem("Action 1", () => console.log("Action 1 pressed")),
      new ActionItem("Action 2", () => console.log("Action 2 pressed")),
      new ActionItem("Action 3", () => console.log("Action 3 pressed")),
      new ActionItem("Action 4", () => console.log("Action 4 pressed")),
      new ActionItem("Action 5", () => console.log("Action 5 pressed")),
    ],
    height: "215px",
    width: "180px",
    logEvent: true,
  });

  menu.setEventListeners({ logEvent: true });
}
