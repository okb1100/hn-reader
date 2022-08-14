type HNItem = {
  id: number;
  by: string;
  kids: number[];
  time: number;
  type: string;
};

type Stories = Array<HNStory | HNAsk>;
type ListType = "new" | "top" | "best";

type HNStory = HNItem & {
  descendants: number;
  score: number;
  title: string;
  type: "story";
  url?: string;
  text?: string;
};

type HNComment = HNItem & {
  text: string;
  type: "comment";
  parent: number;
};
