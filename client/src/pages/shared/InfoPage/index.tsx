import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import { useMediumBrekpointMatchesUp } from "@utils/mediaQuerriesUtils";
import { InfoPageButtonsGroup } from "@appTypes/shared/components";
import { Image } from "@appTypes/shared/image";
import { useStyles } from "./styles";

interface Props {
  buttonsGroup?: InfoPageButtonsGroup;
  icon?: Image;
  iconAltDescription?: string;
  desktopIconHeight?: number | "auto";
  desktopIconWidth?: number | "auto";
  mobileIconHeight?: number | "auto";
  mobileIconWidth?: number | "auto";
  title: string;
  subtitle?: string;
}

export const InfoGenericPage: React.FC<Props> = ({
  buttonsGroup,
  icon,
  iconAltDescription,
  desktopIconHeight,
  desktopIconWidth,
  mobileIconHeight,
  mobileIconWidth,
  subtitle,
  title,
}) => {
  const classes = useStyles();
  const mediumMediaBreakpointMatches = useMediumBrekpointMatchesUp();

  return (
    <Grid
      className={classes.container}
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      {icon ? (
        <img
          className={classes.icon}
          src={icon}
          alt={iconAltDescription || "icon"}
          width={
            mediumMediaBreakpointMatches
              ? desktopIconWidth || 120
              : mobileIconWidth || 60
          }
          height={
            mediumMediaBreakpointMatches
              ? desktopIconHeight || 120
              : mobileIconHeight || 60
          }
        />
      ) : null}
      <Typography
        className={classes.title}
        variant={mediumMediaBreakpointMatches ? "h4" : "h6"}
        align="center"
      >
        {title}
      </Typography>
      {subtitle ? (
        <Typography
          className={classes.title}
          variant={mediumMediaBreakpointMatches ? "h5" : "subtitle1"}
          align="center"
        >
          {subtitle}
        </Typography>
      ) : null}
      {buttonsGroup ? (
        <Grid className={classes.buttonsGroup} item>
          <Grid container direction={buttonsGroup.direction} justify="center">
            {buttonsGroup.buttons.map(button => (
              <Button
                key={button.title + Date.now().toLocaleString()}
                className={`${classes.button} ${button.className ?? ""}`}
                variant="contained"
                onClick={button.onClick}
                style={button.style}
              >
                {button.title}
              </Button>
            ))}
          </Grid>
        </Grid>
      ) : null}
    </Grid>
  );
};
