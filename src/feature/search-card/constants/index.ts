import { CardStackIcon, FileIcon, PersonIcon } from "@radix-ui/react-icons";

export enum ITEMS_TYPE {
  PEOPLE = "people",
  FILE = "file",
  FOLDER = "folder",
}

export const TAB_KEYS = {
  ALL: "all",
  [ITEMS_TYPE.FILE]: ITEMS_TYPE.FILE,
  [ITEMS_TYPE.PEOPLE]: ITEMS_TYPE.PEOPLE,
  [ITEMS_TYPE.FOLDER]: ITEMS_TYPE.FOLDER,
};

export const TABS_ITEMS = {
  [TAB_KEYS.ALL]: {
    label: "All",
    value: TAB_KEYS.ALL,
    icon: null,
  },
  [TAB_KEYS[ITEMS_TYPE.FILE]]: {
    label: "Files",
    value: ITEMS_TYPE.FILE,
    icon: FileIcon,
  },
  [TAB_KEYS[ITEMS_TYPE.PEOPLE]]: {
    label: "People",
    value: ITEMS_TYPE.PEOPLE,
    icon: PersonIcon,
  },
  [TAB_KEYS[ITEMS_TYPE.FOLDER]]: {
    label: "Folders",
    value: ITEMS_TYPE.FOLDER,
    icon: CardStackIcon,
  },
};
