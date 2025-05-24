import React from "react";
//components
import { HomeIcon } from "@/components/_common/icons/HomeIcon";
import { SearchIcon } from "@/components/_common/icons/SearchIcon";

type Props = {
  label: string;
  color: string;
};

const BottomNavigationIconSwitcher: React.FC<Props> = ({
  label,
  color,
}): React.JSX.Element => {
  switch (label) {
    case "index":
      return <HomeIcon color={color} />;
    case "search":
      return <SearchIcon color={color} />;
    default:
      return <HomeIcon color={color} />;
  }
};

export default BottomNavigationIconSwitcher;
