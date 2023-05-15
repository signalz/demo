import React from "react";
import { SvgIconProps } from "@pgvn/icons";
import { CSS } from "../theme/stitches.config";
import { StyledIcon } from "./icon.styles";

export type IconComponent = React.FC<SvgIconProps>;

export interface IconProps {
  component: IconComponent;
  size?: "sm" | "md" | "lg" | "xl";
  display?: "block" | "inline";
  css?: CSS;
  className?: string;
}

export const Icon = (props: IconProps): JSX.Element => {
  return (
    <StyledIcon
      as={props.component}
      size={props.size}
      display={props.display}
      css={props.css}
      className={props.className}
    ></StyledIcon>
  );
};
