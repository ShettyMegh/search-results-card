import { GearIcon } from "@radix-ui/react-icons";
import { TABS_ITEMS } from "../constants";

const TabsList = ({
  activeTab,
  onChange,
}: {
  activeTab: string;
  onChange: (activeTabs: string) => void;
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
              <p className="tab-item__chip">2</p>
            </button>
          );
        })}
        <button className="tab-item tab-item--settings">
          <GearIcon height={16} width={16} />
        </button>
      </div>
    </div>
  );
};

export default TabsList;
