/* eslint-disable prettier/prettier */
import { styled, VariantProps } from '../theme/stitches.config';

export const StyledIcon = styled('span', {
  variants: {
    display: {
      block: {
        display: "block",
      },
      inline: {
        display: "inline",
        verticalAlign: "top",
        position: "relative",
        top: "2px",
      },
    },
    size: {
      sm: {
        width: "16px",
        height: "16px",
        strokeWidth: "1.3"
      },
      md: {
        width: "24px",
        height: "24px",
        strokeWidth: "1.5"
      },
      lg: {
        width: "32px",
        height: "32px",
        strokeWidth: "1.7"
      },
      xl: {
        width: "48px",
        height: "48px",
        strokeWidth: "2"
      },
    },
  },
  defaultVariants: {
    display: "block",
    size: "md",
  },
});

export type IconVariantsProps = VariantProps<typeof StyledIcon>;
