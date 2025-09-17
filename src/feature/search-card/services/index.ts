import { LIST_DATA } from "../constants/list-data";

export const getDummyData = async (payload: {
  search: string;
  type: string;
}) => {
  const { search, type } = payload;
  return new Promise((res) => {
    setTimeout(() => {
      const filteredItems = LIST_DATA.filter((item) => {
        const title = item.title.toLowerCase();
        const lowerSearch = search.toLowerCase();
        const condition =
          title.includes(lowerSearch) &&
          (type.length ? type === item.type : true);
        return condition;
      });
      res(filteredItems);
    }, 2000);
  });
};
