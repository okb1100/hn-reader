import { createStyles } from "@mantine/core";
import React from "react";
import StoryItem from "./StoryItem";

type StoryListProps = {
  items: Array<HNStory>;
  onSelectedItem: (item: HNStory | null) => void;
};

const useStyles = createStyles((theme) => ({
  list: {
    height: "85vh",
    overflowY: "scroll",
  },
}));

const StoryList: React.FC<StoryListProps> = ({ items, onSelectedItem }) => {
  const { classes } = useStyles();
  return (
    <div className={classes.list}>
      {items.map((item, index) => {
        return (
          <div onClick={() => onSelectedItem(item)} key={index}>
            <StoryItem item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default StoryList;
