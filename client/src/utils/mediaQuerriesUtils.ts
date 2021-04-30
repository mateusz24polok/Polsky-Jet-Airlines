import { Theme, useMediaQuery } from "@material-ui/core";

export const useExtraSmallBrekpointMatchesUp = (): boolean =>
  useMediaQuery((theme: Theme) => theme.breakpoints.up("xs"));

export const useSmallBrekpointMatchesUp = (): boolean =>
  useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));

export const useMediumBrekpointMatchesUp = (): boolean =>
  useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));

export const useLargeBrekpointMatchesUp = (): boolean =>
  useMediaQuery((theme: Theme) => theme.breakpoints.up("lg"));

export const useExtraLargeBrekpointMatchesUp = (): boolean =>
  useMediaQuery((theme: Theme) => theme.breakpoints.up("xl"));

export const useExtraSmallBrekpointMatchesDown = (): boolean =>
  useMediaQuery((theme: Theme) => theme.breakpoints.down("xs"));

export const useSmallBrekpointMatchesDown = (): boolean =>
  useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

export const useMediumBrekpointMatchesDown = (): boolean =>
  useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

export const useLargeBrekpointMatchesDown = (): boolean =>
  useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));

export const useExtraLargeBrekpointMatchesDown = (): boolean =>
  useMediaQuery((theme: Theme) => theme.breakpoints.down("xl"));
