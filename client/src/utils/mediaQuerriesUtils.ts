import { Theme, useMediaQuery } from "@material-ui/core";

export const useExtraSmallBrekpointMatches = () =>
  useMediaQuery((theme: Theme) => theme.breakpoints.up("xs"));

export const useSmallBrekpointMatches = (): boolean =>
  useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));

export const useMediumBrekpointMatches = () =>
  useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));

export const useLargeBrekpointMatches = () =>
  useMediaQuery((theme: Theme) => theme.breakpoints.up("lg"));

export const useExtraLargeBrekpointMatches = () =>
  useMediaQuery((theme: Theme) => theme.breakpoints.up("xl"));
