import React from "react";
import { Text, TextStyle } from "react-native";

type Props = {
  styles?: TextStyle;
  children: React.ReactNode;
  numberOfLines?: number;
};

const PoppinsRegular: React.FC<Props> = ({
  styles,
  children,
  numberOfLines,
}): React.JSX.Element => {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        {
          fontFamily: "Poppins-Regular",
        },
        styles,
      ]}
    >
      {children}
    </Text>
  );
};
export default PoppinsRegular;
