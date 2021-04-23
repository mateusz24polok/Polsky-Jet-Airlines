import React from "react";
import {
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Grid,
  Collapse,
  Box,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useStyles } from "./styles";
import { R } from "../../../res/res";
import { useSmallBrekpointMatches } from "../../utils/mediaQuerriesUtils";

export const MobileNavBar = (): JSX.Element => {
  const classes = useStyles();

  const smallMatches = useSmallBrekpointMatches();

  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <MuiAppBar position="static" className={classes.root}>
      <Toolbar>
        <Grid container direction="column">
          <Grid
            container
            justify="space-between"
            alignItems="center"
            wrap="nowrap"
            item
          >
            <Grid
              item
              sm={6}
              xs={2}
              container
              justify="flex-start"
              alignItems="center"
            >
              <Grid item>
                <IconButton edge="start" className={classes.menuButton}>
                  <img
                    src={
                      smallMatches ? R.images.LogoFullSmall : R.images.ImageLogo
                    }
                    alt="Logo"
                    height={50}
                  />
                </IconButton>
              </Grid>
            </Grid>
            <Grid
              item
              sm={6}
              xs={10}
              container
              justify="flex-end"
              alignItems="center"
            >
              <Grid item>
                <Button color="inherit">Login</Button>
              </Grid>
              <Grid item>
                <Button color="inherit">SignUp</Button>
              </Grid>
              <Grid item>
                <IconButton onClick={handleExpandClick}>
                  <MenuIcon style={{ color: "white" }} />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Collapse in={isExpanded} timeout="auto" unmountOnExit>
              <Box pt={2} pb={4}>
                <Grid
                  container
                  direction="column"
                  alignItems="center"
                  spacing={1}
                >
                  <Grid item>
                    <Typography variant="h6" className={classes.title}>
                      Loty
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" className={classes.title}>
                      Hotele
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" className={classes.title}>
                      Samochody
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" className={classes.title}>
                      O nas
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Collapse>
          </Grid>
        </Grid>
      </Toolbar>
    </MuiAppBar>
  );
};
