import threeDotIcon from "../../icons/three-dot-icon.svg";
import settingsIcon from "../../icons/settings-icon.svg";
import hamburgerIcon from "../../icons/hamburger-icon.svg";
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
        <div class="demo-card flex flex-col items-center gap-1 border-1 border-[#d7d7d7] bg-[#f5f5f5] rounded-md shadow-[0px_46px_130px_rgba(0,0,0,15%)] max-sm:h-full max-sm:w-full">
            <div class="border-b-1 border-b-[#D7D7D7] px-10 py-4 text-3xl text-center font-semibold max-sm:w-full max-sm:text-2xl">Custom Dropdown Menu</div>
            <div class="mt-6 bg-[#a918ca] p-1 px-2 rounded-md text-[#F5E4F5] font-semibold text-s max-sm:mt-32">Click the Three Menu Icons below</div>
            <div class="mt-12 flex flex-row items-center gap-12">
                <img id="settings-button" class="h-12 w-12 bg-[#E1E1E1] p-2 rounded-full hover:bg-[#D7D7D7] active:bg-[#CDCDCD] transition" src="${settingsIcon}"> 
                <img id="three-dot-menu-button" class="h-12 w-12 bg-[#E1E1E1] p-2 rounded-full hover:bg-[#D7D7D7] active:bg-[#CDCDCD] transition" src="${threeDotIcon}"> 
                <img id="hamburger-menu-button" class="h-12 w-12 bg-[#E1E1E1] p-2 rounded-full hover:bg-[#D7D7D7] active:bg-[#CDCDCD] transition" src="${hamburgerIcon}"> 
            </div>
            <div class="credits mt-12 mb-4 max-sm:fixed max-sm:bottom-0">Made with <span class="text-[#FF9500] font-medium">VanillaJS</span>, by <a href="https://github.com/whatisaProCoder" target="_blank" class="text-[#6E88FB] font-medium hover:underline">whatisaProCoder</a></div>
        </div>
    `;

  content.appendChild(demoPage);

  new CustomDropDownMenu({
    menuTitle: "Settings",
    triggerElementID: "settings-button",
    actionItemArray: [
      new ActionItem("Themes", () => console.log("Themes pressed")),
      new ActionItem("Preferences", () => console.log("Preferences pressed")),
      new ActionItem("Import", () => console.log("Import pressed")),
      new ActionItem("Export", () => console.log("Export pressed")),
      new ActionItem("Reset", () => console.log("Reset pressed")),
    ],
    height: "210px",
    width: "170px",
    logEvent: true,
  }).setEventListeners();

  new CustomDropDownMenu({
    menuTitle: "Select",
    triggerElementID: "three-dot-menu-button",
    actionItemArray: [
      new ActionItem("Item 1", () => console.log("Item 1 pressed")),
      new ActionItem("Item 2", () => console.log("Item 2 pressed")),
      new ActionItem("Item 3", () => console.log("Item 3 pressed")),
      new ActionItem("Item 4", () => console.log("Item 4 pressed")),
      new ActionItem("Item 5", () => console.log("Item 5 pressed")),
    ],
    height: "210px",
    width: "170px",
    logEvent: true,
  }).setEventListeners();

  new CustomDropDownMenu({
    menuTitle: "Menu",
    triggerElementID: "hamburger-menu-button",
    actionItemArray: [
      new ActionItem("Action 1", () => console.log("Menu Action 1 pressed")),
      new ActionItem("Action 2", () => console.log("Menu Action 2 pressed")),
      new ActionItem("Action 3", () => console.log("Menu Action 3 pressed")),
      new ActionItem("Action 4", () => console.log("Menu Action 4 pressed")),
      new ActionItem("Action 5", () => console.log("Menu Action 5 pressed")),
    ],
    height: "210px",
    width: "170px",
    logEvent: true,
  }).setEventListeners();
}
