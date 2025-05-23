const bottomNavigationNameSwitcher = (label: string): string => {
  switch (label) {
    case "index":
      return "home";
    case "search":
      return "search";
    default:
      return "home";
  }
};

export default bottomNavigationNameSwitcher;
