import { GearIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { TABS_ITEMS } from "../constants";

const SettingsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  //   useEffect(() => {
  //     const handleMouseClick = (e: MouseEvent) => {
  //       const dropdownContainer = document.querySelector(".drop-container");
  //       console.log({ e });
  //       if(e.target && dropdownContainer?.contains(e.target))
  //     };
  //     addEventListener("mousedown", handleMouseClick);
  //     return () => {
  //       removeEventListener("mousedown", handleMouseClick);
  //     };
  //   });
  return (
    <div className="settings">
      <button
        title="Change Tabs"
        className="tab-item tab-item--settings"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <GearIcon height={20} width={20} />
      </button>
      {isOpen && (
        <div className="dropdown-container">
          {Object.keys(TABS_ITEMS).map((key) => {
            return <div className="dropdown-item">{TABS_ITEMS[key].label}</div>;
          })}
        </div>
      )}
    </div>
  );
};

export default SettingsDropdown;
