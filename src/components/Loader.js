import React from "react";
import { css } from "@emotion/core";
import FadeLoader from "react-spinners/FadeLoader";
import { Container, Grid } from "@material-ui/core";

const override = css`
  display: block;
  margin: 0 auto;
  margin-bottom: 10px;
`;

const Loader = () => (
  <Container>
    <Grid
      container
      style={{ height: window.innerHeight - 50 }}
      alignItems={"center"}
      justify={"center"}
    >
      <Grid container alignItems={"center"} direction={"column"}>
        <FadeLoader color="#c42034" loading="true" css={override} size={60} />;
      </Grid>
    </Grid>
  </Container>
);

export default Loader;
