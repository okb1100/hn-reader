import { Container, Grid } from "@mantine/core";
import { capitalize } from "lodash";
import React, { useEffect, useState } from "react";
import { fetchStories, types } from "../../features/HnService/hacknews.service";
import PreviewItem from "../../features/Preview/PreviewItem";
import StoryList from "../../features/Story/StoryList";

type MainScreenProps = {};

const MainScreen: React.FC<MainScreenProps> = (props) => {
  const [selectedItem, setSelectedItem] = useState<HNStory | null>(null);
  const [stories, setStories] = useState<Stories>([]);
  const [length, setLength] = useState<number>(10);
  const [loading, setLoading] = useState<boolean>(false);
  const [type, setType] = useState<ListType>("top");

  useEffect(() => {
    setLoading(true);
    fetchStories(type, length)
      .then(stories => {
        setStories(stories);
        setSelectedItem(stories[0]);
      })
      .finally(() => setLoading(false));
  }, [type, length]);

  return (
    <Grid grow>
      <Grid.Col span={3}>
      <div>
        <select onChange={(e) => setType(e.target.value as ListType)}>
          {Object.keys(types).map((type, index) => (
            <option key={index} value={type}>
              {capitalize(type)}
            </option>
          ))}
        </select>

        <select onChange={(e) => setLength(Number(e.target.value))}>
          {[10, 20, 30, 40, 50].map((length, index) => (
            <option key={index} value={length}>
              {length}
            </option>
          ))}
        </select>
      </div>
      {loading ? <div>...</div> : <StoryList onSelectedItem={setSelectedItem} items={stories} />}
      </Grid.Col>
      <Grid.Col span={9}>
        {selectedItem && <PreviewItem item={selectedItem} />}
      </Grid.Col>
    </Grid>
  );
};

export default MainScreen;
