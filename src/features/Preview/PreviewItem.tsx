import { Button, createStyles, Group } from "@mantine/core";
import { useCounter } from "@mantine/hooks";
import React from "react";

type PreviewItemProps = {
  item: HNStory;
};

const useStyles = (zoom: number) =>
  createStyles((theme) => ({
    iframeWrapper: {
      width: "100%",
      height: "85vh",
      overflow: "hidden"
    },
    iframe: {
      border: "none",
      width: "100%",
      height: "100%",
      transformOrigin: "0 0",
      transform: `scale(${zoom / 10})`,
      zoom: zoom / 10,
    },
  }));

const IFrameItem = ({ url, title }: { url: string; title: string }) => {
  const [count, handlers] = useCounter(10, { min: 1, max: 20 });
  const { classes } = useStyles(count)();
  return (
    <>
      <div className={classes.iframeWrapper}>
        <iframe className={classes.iframe} title={title} src={url} />
      </div>
      <Group position="center">
        <Button onClick={handlers.increment}>Increment</Button>
        <Button onClick={handlers.decrement}>Decrement</Button>
        <Button onClick={handlers.reset}>Reset</Button>
      </Group>
    </>
  );
};

const PreviewItem: React.FC<PreviewItemProps> = ({ item }) => {
  return (
    <>
      <div>
        {item?.url ? (
          <IFrameItem url={item.url} title={item.title} />
        ) : (
          <p dangerouslySetInnerHTML={{ __html: item.text || "" }} />
        )}
      </div>
    </>
  );
};

export default PreviewItem;
