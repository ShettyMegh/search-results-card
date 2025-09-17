import { LIST_DATA } from "../constants/list-data";

export const getDummyData = async (search: string) => {
  return new Promise((res) => {
    setTimeout(() => {
      const filteredItems = LIST_DATA.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
      res(filteredItems);
    }, 4000);
  });
};
