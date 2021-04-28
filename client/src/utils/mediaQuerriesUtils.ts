import { Theme, useMediaQuery } from "@material-ui/core";

export const useExtraSmallBrekpointMatchesUp = () =>
  useMediaQuery((theme: Theme) => theme.breakpoints.up("xs"));

export const useSmallBrekpointMatchesUp = (): boolean =>
  useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));

export const useMediumBrekpointMatchesUp = () =>
  useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));

export const useLargeBrekpointMatchesUp = () =>
  useMediaQuery((theme: Theme) => theme.breakpoints.up("lg"));

export const useExtraLargeBrekpointMatchesUp = () =>
  useMediaQuery((theme: Theme) => theme.breakpoints.up("xl"));

export const useExtraSmallBrekpointMatchesDown = () =>
  useMediaQuery((theme: Theme) => theme.breakpoints.down("xs"));

export const useSmallBrekpointMatchesDown = (): boolean =>
  useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

export const useMediumBrekpointMatchesDown = () =>
  useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

export const useLargeBrekpointMatchesDown = () =>
  useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));

export const useExtraLargeBrekpointMatchesDown = () =>
  useMediaQuery((theme: Theme) => theme.breakpoints.down("xl"));
