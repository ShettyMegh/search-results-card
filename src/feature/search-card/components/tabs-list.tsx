import { GearIcon } from "@radix-ui/react-icons";
import { TABS_ITEMS } from "../constants";
import SettingsDropdown from "./settings-dropdown";

const TabsList = ({
  activeTab,
  onChange,
  counts,
}: {
  activeTab: string;
  onChange: (activeTabs: string) => void;
  counts: {
    [key: string]: number;
  };
}) => {
  return (
    <div className="card-tabs">
      <div className="tabs-list">
        {Object.keys(TABS_ITEMS).map((key) => {
          const curItem = TABS_ITEMS[key];
          const Icon = curItem.icon;
          const isActive = key === activeTab;
          return (
            <button
              className={`tab-item ${isActive ? "tab-item--active" : ""}`}
              onClick={() => onChange(key)}
            >
              {!!Icon && <Icon height={16} width={16} />}
              <p>{curItem.label}</p>
              <p className="tab-item__chip">{counts[key]}</p>
            </button>
          );
        })}
        <SettingsDropdown />
      </div>
    </div>
  );
};

export default TabsList;
