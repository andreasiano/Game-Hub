import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Grid
      templateAreas={{ base: `'nav' 'main'`, lg: `'nav nav' 'aside main'` }}
    >
      <GridItem area="nav">
        <Navbar/>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main">
        Main
      </GridItem>
    </Grid>
  );
}
