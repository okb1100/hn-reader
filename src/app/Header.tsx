import { createStyles, Header as MHeader } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    margin: 0,
    padding: 0,
  },
}));

const Header = () => {
  const { classes } = useStyles();
  return (
    <MHeader height={60} p="xs">
      <h2 className={classes.title}>HN Reader</h2>
    </MHeader>
  );
};

export default Header;
