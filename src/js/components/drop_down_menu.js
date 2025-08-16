import Scrollbar from "smooth-scrollbar";

export class CustomDropDownMenu {
  constructor({
    menuTitle,
    triggerElementID,
    actionItemArray,
    height,
    width,
    logEvent,
  }) {
    this.menuTitle = menuTitle;
    this.triggerElementID = triggerElementID;
    this.actionItemArray = actionItemArray;
    this.height = parseInt(height.slice(0, -2));
    this.width = parseInt(width.slice(0, -2));
    this.isOpen = false;
    this.logEvent = logEvent;
  }
  #calculatePosition() {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    this.triggerElementRect = this.triggerElement.getBoundingClientRect();

    const triggerPositionX =
      this.triggerElementRect.left + this.triggerElementRect.width / 2;
    const triggerPositionY =
      this.triggerElementRect.top + this.triggerElementRect.height / 2;

    let menuPositionX = null;
    let menuPositionY = null;

    if (windowWidth - triggerPositionX > this.width + 32) {
      menuPositionX = triggerPositionX + 32;
    } else {
      menuPositionX = windowWidth - this.width - 32;
    }

    if (windowHeight - triggerPositionY > this.height + 32) {
      menuPositionY = triggerPositionY + 32;
    } else {
      menuPositionY = windowHeight - this.height - 32;
    }

    menuPositionX = Math.ceil(menuPositionX);
    menuPositionY = Math.ceil(menuPositionY);

    return { menuPositionX, menuPositionY };
  }
  setEventListeners() {
    this.menuElement = document.createElement("div");
    this.triggerElement = document.querySelector(`#${this.triggerElementID}`);

    this.triggerElement.addEventListener("click", (event) => {
      if (this.logEvent == true) console.log(event.target);
      if (this.isOpen == false) {
        this.isOpen = true;
        this.render();
      }
    });

    document.addEventListener("click", (event) => {
      if (
        !this.menuElement.contains(event.target) &&
        this.isOpen == true &&
        !this.triggerElement.contains(event.target)
      ) {
        this.close();
      }
    });
  }
  render() {
    if (this.logEvent == true)
      console.log("Opening Menu of Title: ", this.menuTitle);

    const { menuPositionX, menuPositionY } = this.#calculatePosition();

    // for user's custom styling, target this class
    this.menuElement.classList.add("cdm-menu-card");

    this.menuElement.style.position = "fixed";
    this.menuElement.style.height = `${this.height}px`;
    this.menuElement.style.width = `${this.width}px`;
    this.menuElement.style.left = `${menuPositionX}px`;
    this.menuElement.style.top = `${menuPositionY}px`;
    this.menuElement.style.overflow = "hidden";

    this.menuElement.classList.add("border-1", "border-[#D7D7D7]");
    this.menuElement.classList.add("bg-[#F5F5F5]", "rounded-md");
    this.menuElement.classList.add("shadow-[0px_4px_16px_rgba(0,0,0,15%)]");
    this.menuElement.classList.add("flex", "flex-col");

    this.menuElement.innerHTML = /* html */ `
            <div class="cdm-menu-title font-semibold text-xl text-[#3C3C3C] px-4 py-2.5 border-b-1 border-[#D7D7D7]">${this.menuTitle}</div>
            <div id="action-group">
            </div>
        `;

    // target cdm-menu-title for custom styling of menu title

    const actionGroup = this.menuElement.querySelector("#action-group");
    actionGroup.style.overflow = "auto";
    this.actionItemArray.forEach((actionItem) => {
      const actionItemElement = document.createElement("div");

      // target cdm-action-item for custom styling
      actionItemElement.classList.add("cdm-action-item");

      actionItemElement.classList.add("p-4", "py-2.5", "mt-2");
      actionItemElement.style.userSelect = "none";
      actionItemElement.innerHTML = /* html */ `
                ${actionItem.actionName}
            `;
      actionItemElement.addEventListener("click", () => {
        actionItem.actionFunction();
        this.close();
      });
      actionGroup.appendChild(actionItemElement);
    });

    document.body.appendChild(this.menuElement);

    Scrollbar.init(this.menuElement.querySelector("#action-group"), {
      alwaysShowTracks: true,
    });

    this.menuElement.classList.remove("fade-out");
    this.menuElement.classList.add("fade-in");
  }
  close() {
    if (this.logEvent == true) {
      console.log("Closing Menu of Title: ", this.menuTitle);
    }
    this.menuElement.classList.remove("fade-in");
    this.menuElement.classList.add("fade-out");
    setTimeout(() => {
      this.menuElement.remove();
      this.isOpen = false;
    }, 500);
  }
}

export class ActionItem {
  constructor(actionName, actionFunction) {
    this.actionName = actionName;
    this.actionFunction = actionFunction;
  }
}
