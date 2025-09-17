import { ITEMS_TYPE } from "../constants";

export type FolderFileType = {
  title: string;
  totalFiles?: number;
  type: ITEMS_TYPE;
  location: string;
  updated: string;
};
