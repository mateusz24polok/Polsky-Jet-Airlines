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
  title: string;
  subtitle?: string;
}

export const InfoGenericPage: React.FC<Props> = ({
  buttonsGroup,
  icon,
  iconAltDescription,
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
          src={icon}
          alt={iconAltDescription || "icon"}
          width={mediumMediaBreakpointMatches ? 120 : 60}
          height={mediumMediaBreakpointMatches ? 120 : 60}
        />
      ) : null}
      <Typography
        className={classes.title}
        variant={mediumMediaBreakpointMatches ? "h4" : "h5"}
        align="center"
      >
        {title}
      </Typography>
      {subtitle ? (
        <Typography
          className={classes.title}
          variant={mediumMediaBreakpointMatches ? "h5" : "h6"}
          align="center"
        >
          {subtitle}
        </Typography>
      ) : null}
      {buttonsGroup ? (
        <Grid className={classes.buttonsGroup} item>
          <Grid container direction={buttonsGroup.direction}>
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
