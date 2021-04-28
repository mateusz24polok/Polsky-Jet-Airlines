export const executeScroll = (ref: React.RefObject<HTMLElement>) => {
  if (ref && ref.current) {
    ref.current.scrollIntoView();
  }
};
