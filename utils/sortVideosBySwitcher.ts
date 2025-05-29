const sortVideosBySwitcher = (
  isCheckedDateLatest: boolean,
  isCheckedDateOldest: boolean,
  isCheckedPopular: boolean
): string => {
  switch (true) {
    case isCheckedDateLatest:
      return "Upload date: latest";
    case isCheckedDateOldest:
      return "Upload date: oldest";
    case isCheckedPopular:
      return "Most popular";
    default:
      return "Upload date: latest";
  }
};

export default sortVideosBySwitcher;
