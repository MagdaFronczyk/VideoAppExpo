import { HomeIcon } from "@/components/icons/HomeIcon";
import { SearchIcon } from "@/components/icons/SearchIcon";
import React from "react";

type Props = {
  label: string;
  color: string;
};

const BottomNavigationIconSwitcher: React.FC<Props> = ({
  label,
  color,
}): React.JSX.Element => {
  console.log(label);
  switch (label) {
    case "index/index":
      return <HomeIcon color={color} />;
    case "search/index":
      return <SearchIcon color={color} />;
    default:
      return <HomeIcon color={color} />;
  }
};

export default BottomNavigationIconSwitcher;
