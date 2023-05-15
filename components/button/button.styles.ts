import { ButtonVariants } from './styles/variants';
import { ButtonBase } from './styles/base';
/* eslint-disable prettier/prettier */
import { styled, VariantProps } from "../theme/stitches.config";

export const StyledButton = styled("button", ButtonBase, ButtonVariants, {
  /* Constant properties */
  fontSize: "14px",
  fontWeight: "700",
  height: "32px",
  width: "max-content",
  borderRadius: "$round4",

  /* Computed properties */
  color: "$white",
  boxShadow: "var(--shadow, none)",
  opacity: "var(--opacity, 1)",

  [".core-button-loading"]: {
    display: "none",
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },

  [".core-button-children"]: {
    display: "flex",
    alignItems: "center"
  },

  compoundVariants: [
    //Button gradient
    {
      variant: "solid",
      intent: "primary",
      isDisabled: false,
      css: {
        bg: "$red4",
        color: "$white",
        ["&:hover"]: {
          bg: "$red3",
        },
        ["&:active"]: {
          bg: "$red5",
        },
      },
    },
    {
      variant: "solid",
      intent: "secondary",
      isDisabled: false,
      css: {
        bg: "$gray5",
        color: "$white",
        ["&:hover"]: {
          bg: "$gray4",
        },
        ["&:active"]: {
          bg: "$gray6",
        },
      },
    },
    {
      variant: "solid",
      intent: "green",
      isDisabled: false,
      css: {
        bg: "$green4",
        color: "$white",
        ["&:hover"]: {
          bg: "$green3",
        },
        ["&:active"]: {
          bg: "$green5",
        },
      },
    },
    {
      variant: "solid",
      intent: "yellow",
      isDisabled: false,
      css: {
        bg: "$yellow4",
        color: "$white",
        ["&:hover"]: {
          bg: "$yellow3",
        },
        ["&:active"]: {
          bg: "$yellow5",
        },
      },
    },
    {
      variant: "solid",
      intent: "orange",
      isDisabled: false,
      css: {
        bg: "$orange4",
        color: "$white",
        ["&:hover"]: {
          bg: "$orange3",
        },
        ["&:active"]: {
          bg: "$orange5",
        },
      },
    },
    {
      variant: "solid",
      intent: "purple",
      isDisabled: false,
      css: {
        bg: "$purple4",
        color: "$white",
        ["&:hover"]: {
          bg: "$purple3",
        },
        ["&:active"]: {
          bg: "$purple5",
        },
      },
    },
    {
      variant: "solid",
      intent: "cyan",
      isDisabled: false,
      css: {
        bg: "$cyan4",
        color: "$white",
        ["&:hover"]: {
          bg: "$cyan3",
        },
        ["&:active"]: {
          bg: "$cyan5",
        },
      },
    },
    {
      variant: "solid",
      intent: "blue",
      isDisabled: false,
      css: {
        bg: "$blue4",
        color: "$white",
        ["&:hover"]: {
          bg: "$blue3",
        },
        ["&:active"]: {
          bg: "$blue5",
        },
      },
    },

    //Button border
    {
      variant: "border",
      intent: "primary",
      isDisabled: false,
      css: {
        border: "1px solid $red4",
        color: "$red4",
        ["&:hover"]: {
          bg: "$red1",
        },
        ["&:active"]: {
          color: "$white",
          bg: "$red4",
        },
      },
    },
    {
      variant: "border",
      intent: "secondary",
      isDisabled: false,
      css: {
        border: "1px solid $gray3",
        color: "$red6",
        ["&:hover"]: {
          bg: "$gray2",
        },
        ["&:active"]: {
          color: "$white",
          bg: "$gray5",
        },
      },
    },
    {
      variant: "border",
      intent: "green",
      isDisabled: false,
      css: {
        border: "1px solid $green4",
        color: "$green4",
        ["&:hover"]: {
          bg: "$green1",
        },
        ["&:active"]: {
          color: "$white",
          bg: "$green4",
        },
      },
    },
    {
      variant: "border",
      intent: "yellow",
      isDisabled: false,
      css: {
        border: "1px solid $yellow4",
        color: "$yellow4",
        ["&:hover"]: {
          bg: "$yellow1",
        },
        ["&:active"]: {
          color: "$white",
          bg: "$yellow4",
        },
      },
    },
    {
      variant: "border",
      intent: "orange",
      isDisabled: false,
      css: {
        border: "1px solid $orange4",
        color: "$orange4",
        ["&:hover"]: {
          bg: "$orange1",
        },
        ["&:active"]: {
          color: "$white",
          bg: "$orange4",
        },
      },
    },
    {
      variant: "border",
      intent: "purple",
      isDisabled: false,
      css: {
        border: "1px solid $purple4",
        color: "$purple4",
        ["&:hover"]: {
          bg: "$purple1",
        },
        ["&:active"]: {
          color: "$white",
          bg: "$purple4",
        },
      },
    },
    {
      variant: "border",
      intent: "cyan",
      isDisabled: false,
      css: {
        border: "1px solid $cyan4",
        color: "$cyan4",
        ["&:hover"]: {
          bg: "$cyan1",
        },
        ["&:active"]: {
          color: "$white",
          bg: "$cyan4",
        },
      },
    },
    {
      variant: "border",
      intent: "blue",
      isDisabled: false,
      css: {
        border: "1px solid $blue4",
        color: "$blue4",
        ["&:hover"]: {
          bg: "$blue1",
        },
        ["&:active"]: {
          color: "$white",
          bg: "$blue4",
        },
      },
    },

    //Button Ghost
    {
      variant: "ghost",
      intent: "primary",
      isDisabled: false,
      css: {
        color: "$red4",
        ["&:hover"]: {
          bg: "$gray2",
        },
        ["&:active"]: {
          bg: "$gray3",
        },
      },
    },
    {
      variant: "ghost",
      intent: "secondary",
      isDisabled: false,
      css: {
        color: "$gray6",
        ["&:hover"]: {
          bg: "$gray2",
        },
        ["&:active"]: {
          bg: "$gray3",
        },
      },
    },
    {
      variant: "ghost",
      intent: "green",
      isDisabled: false,
      css: {
        color: "$green4",
        ["&:hover"]: {
          bg: "$gray2",
        },
        ["&:active"]: {
          bg: "$gray3",
        },
      },
    },
    {
      variant: "ghost",
      intent: "yellow",
      isDisabled: false,
      css: {
        color: "$yellow4",
        ["&:hover"]: {
          bg: "$gray2",
        },
        ["&:active"]: {
          bg: "$gray3",
        },
      },
    },
    {
      variant: "ghost",
      intent: "orange",
      isDisabled: false,
      css: {
        color: "$orange4",
        ["&:hover"]: {
          bg: "$gray2",
        },
        ["&:active"]: {
          bg: "$gray3",
        },
      },
    },
    {
      variant: "ghost",
      intent: "purple",
      isDisabled: false,
      css: {
        color: "$purple4",
        ["&:hover"]: {
          bg: "$gray2",
        },
        ["&:active"]: {
          bg: "$gray3",
        },
      },
    },
    {
      variant: "ghost",
      intent: "cyan",
      isDisabled: false,
      css: {
        color: "$cyan4",
        ["&:hover"]: {
          bg: "$gray2",
        },
        ["&:active"]: {
          bg: "$gray3",
        },
      },
    },
    {
      variant: "ghost",
      intent: "blue",
      isDisabled: false,
      css: {
        color: "$blue4",
        ["&:hover"]: {
          bg: "$gray2",
        },
        ["&:active"]: {
          bg: "$gray3",
        },
      },
    },

    {
      isFocusVisible: true,
      intent: "primary",
      css: {
        outline: "$red2 solid 4px",
      },
    },
    {
      isFocusVisible: true,
      intent: "secondary",
      css: {
        outline: "$gray2 solid 4px",
      },
    },
    {
      isFocusVisible: true,
      intent: "green",
      css: {
        outline: "$green2 solid 4px",
      },
    },
    {
      isFocusVisible: true,
      intent: "blue",
      css: {
        outline: "$blue2 solid 4px",
      },
    },
    {
      isFocusVisible: true,
      intent: "cyan",
      css: {
        outline: "$cyan2 solid 4px",
      },
    },
    {
      isFocusVisible: true,
      intent: "orange",
      css: {
        outline: "$orange2 solid 4px",
      },
    },
    {
      isFocusVisible: true,
      intent: "purple",
      css: {
        outline: "$purple2 solid 4px",
      },
    },
    {
      isFocusVisible: true,
      intent: "yellow",
      css: {
        outline: "$yellow2 solid 4px",
      },
    },

    {
      variant: "gradient",
      intent: "base",
      isDisabled: true,
      css: {
        bg: "$gray3",
        color: "$gray5",
      },
    },
    {
      variant: "gradient",
      intent: "primary",
      isDisabled: true,
      css: {
        bg: "$gray3",
        color: "$gray5",
      },
    },
    {
      variant: "gradient",
      intent: "success",
      isDisabled: true,
      css: {
        bg: "$gray3",
        color: "$gray5",
      },
    },
    {
      variant: "gradient",
      intent: "warning",
      isDisabled: true,
      css: {
        bg: "$gray3",
        color: "$gray5",
      },
    },
    {
      variant: "gradient",
      intent: "danger",
      isDisabled: true,
      css: {
        bg: "$gray3",
        color: "$gray5",
      },
    },

    {
      variant: "outlined",
      intent: "base",
      isDisabled: true,
      css: {
        bg: "$gray3",
        color: "$gray5",
        border: "1px solid $gray4",
      },
    },
    {
      variant: "outlined",
      intent: "primary",
      isDisabled: true,
      css: {
        bg: "$gray3",
        color: "$gray5",
        border: "1px solid $gray4",
      },
    },
    {
      variant: "outlined",
      intent: "success",
      isDisabled: true,
      css: {
        bg: "$gray3",
        color: "$gray5",
        border: "1px solid $gray4",
      },
    },
    {
      variant: "outlined",
      intent: "warning",
      isDisabled: true,
      css: {
        bg: "$gray3",
        color: "$gray5",
        border: "1px solid $gray4",
      },
    },
    {
      variant: "outlined",
      intent: "danger",
      isDisabled: true,
      css: {
        bg: "$gray3",
        color: "$gray5",
        border: "1px solid $gray4",
      },
    },

    {
      variant: "plain",
      intent: "base",
      isDisabled: true,
      css: {
        color: "$gray5",
      },
    },
    {
      variant: "plain",
      intent: "primary",
      isDisabled: true,
      css: {
        color: "$gray5",
      },
    },
    {
      variant: "plain",
      intent: "success",
      isDisabled: true,
      css: {
        color: "$gray5",
      },
    },
    {
      variant: "plain",
      intent: "warning",
      isDisabled: true,
      css: {
        color: "$gray5",
      },
    },
    {
      variant: "plain",
      intent: "danger",
      isDisabled: true,
      css: {
        color: "$gray5",
      },
    },

    {
      isIconOnly: true,
      size: "sm",
      css: {
        width: "32px",
        height: "32px",
        padding: "0",
      },
    },
    {
      isIconOnly: true,
      size: "lg",
      css: {
        width: "48px",
        height: "48px",
        padding: "0",
        [".core-button-icon"]: {
          width: "32px",
          height: "32px",
        },
      },
    },

    //Loading
    {
      isLoading: true,
      css: {
        [".core-button-children"]: {
          opacity: 0,
          visibility: "hidden",
        },
        [".core-button-loading"]: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      },
    },
  ],

  ["&:disabled"]: {
    cursor: "not-allowed",
  },

  defaultVariants: {
    intent: "primary",
    variant: "solid",
    isDisabled: false,
    isLoading: false,
    size: "sm",
    isIconOnly: false,
  },
});

export type ButtonVariantsProps = VariantProps<typeof StyledButton>;
