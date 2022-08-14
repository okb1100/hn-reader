import { range } from "lodash";

const api = "https://hacker-news.firebaseio.com/v0";

export const fetchMaxId = async (): Promise<number> => {
  const maxID = await (await fetch(`${api}/maxitem.json`)).text();
  return Number(maxID);
};

export const types = {
    new: "newstories",
    top: "topstories",
    best: "beststories",
  };

export const fetchIDS = async (type: ListType): Promise<number[]> => {
  const route = types[type];
  const ids = await (await fetch(`${api}/${route}.json`)).json();
  return ids;
};


export const fetchStories = async (
  type: ListType = "new",
  take: number = 10,
  skip: number = 0
): Promise<Stories> => {
  const ids = await fetchIDS(type);
  
  const promises = ids.slice(skip, take).map(async (id) => {
    return await (await fetch(`${api}/item/${id}.json`)).json();
  });

  const stories = await Promise.all(promises);
  return stories;
};
