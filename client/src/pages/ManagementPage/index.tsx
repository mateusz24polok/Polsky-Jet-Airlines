import React from "react";
import { Grid } from "@material-ui/core";
import { SideMenu } from "@components/management/SideMenu";

export const ManagementPage: React.FC = () => {
  return (
    // {/* <Typography variant="h5">Managment System</Typography> */}
    <Grid
      container
      alignItems="stretch"
      wrap="nowrap"
      style={{ position: "absolute", minHeight: "100%" }}
    >
      <Grid item xs={2} style={{ backgroundColor: "gray" }}>
        <SideMenu />
      </Grid>
      <Grid item xs={10} style={{ backgroundColor: "orange" }}>
        Content
      </Grid>
    </Grid>
  );
};
