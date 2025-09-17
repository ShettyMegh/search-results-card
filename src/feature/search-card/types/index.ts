import { ITEMS_TYPE } from "../constants";

export type FolderFileType = {
  title: string;
  totalFiles?: number;
  type: ITEMS_TYPE;
  location: string;
  updated: string;
};

export type PersonType = {
  title: string;
  type: ITEMS_TYPE;
  isActive: boolean;
  lastActive: string;
};
