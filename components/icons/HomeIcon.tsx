import { JSX } from "react";
import { ColorValue } from "react-native";
import Svg, { Path } from "react-native-svg";

type Props = {
  color: ColorValue;
};

export const HomeIcon: React.FC<Props> = ({ color }): JSX.Element => {
  return (
    <Svg width="28" height="29" viewBox="0 0 28 29" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.8185 0.614202C14.3371 0.239714 13.6629 0.239714 13.1815 0.614202L1.18141 9.94754C0.856624 10.2001 0.666664 10.5885 0.666664 11V25.6667C0.666664 27.1395 1.86057 28.3333 3.33333 28.3333H24.6667C26.1395 28.3333 27.3333 27.1395 27.3333 25.6667V11C27.3333 10.5885 27.1433 10.2001 26.8185 9.94754L14.8185 0.614202ZM19.3333 25.6667H24.6667V11.6521L14 3.35582L3.33333 11.6521V25.6667H8.66666V15C8.66666 14.2636 9.26362 13.6667 10 13.6667H18C18.7364 13.6667 19.3333 14.2636 19.3333 15V25.6667ZM11.3333 25.6667V16.3333H16.6667V25.6667H11.3333Z"
        fill={color}
      />
    </Svg>
  );
};
