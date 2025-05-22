const bottomNavigationNameSwitcher = (label): string => {
  switch (label) {
    case "index/index":
      return "home";
    case "search/index":
      return "search";
    default:
      return "home";
  }
};

export default bottomNavigationNameSwitcher;
