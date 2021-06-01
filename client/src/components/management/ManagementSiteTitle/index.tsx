import React from "react";
import { Box, Typography } from "@material-ui/core";

interface Props {
  title: string;
}

export const ManagementSiteTitle: React.FC<Props> = ({ title }) => (
  <Box mb={2}>
    <Typography variant="h5" align="center">
      {title}
    </Typography>
  </Box>
);
