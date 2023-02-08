import { Grid } from "@mantine/core";
import { SideBar } from "../SideBar";

const AppLayout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <Grid>
      <Grid.Col md={2}>
        <SideBar />
      </Grid.Col>
      <Grid.Col md={10}>{children}</Grid.Col>
    </Grid>
  );
};

export { AppLayout };
