import { css } from "../../theme/stitches.config";


export const ButtonVariants = css({ 
  variants: {
    isDisabled: {
      true: {},
    },
    isLoading: {
      true: {},
    },
    isFocusVisible: {
      true: {},
    },
    isIconOnly: {
      true: {},
    },
    intent: {
      primary: {
        color: "$gray5",
        borderColor: "$gray5",
      },
      secondary: {
        color: "$blue5",
        borderColor: "$blue5",
      },
      green: {
        color: "$green5",
        borderColor: "$green5",
      },
      purple: {
        color: "$yellow5",
        borderColor: "$yellow5",
      },
      yellow: {
        color: "$red5",
        borderColor: "$red5",
      },
      orange: {
        color: "$red5",
        borderColor: "$red5",
      },
      cyan: {
        color: "$red5",
        borderColor: "$red5",
      },
      blue: {
        color: "$red5",
        borderColor: "$red5",
      },
      lime: {
        color: "$red5",
        borderColor: "$red5",
      },
    },
    variant: {
      solid: {
        borderWidth: "0",
        borderStyle: "solid",
      },
      border: {
        borderWidth: "1px",
        borderStyle: "solid",
      },
      ghost: {
        borderWidth: "0",
        borderStyle: "solid",
      },
    },
    size: {
      sm: {
        height: "32px",
        fontSize: "14px",
        padding: "0 12px",
        [".core-button-children>:not([hidden])~:not([hidden])"]: {
          marginRight: 0,
          marginLeft: "4px",
        },
        [".core-button-icon"]: {
          width: "16px",
          height: "16px",
        },
      },
      lg: {
        height: "48px",
        fontSize: "14px",
        padding: "0 16px",
        borderRadius: "$round8",
        [".core-button-children>:not([hidden])~:not([hidden])"]: {
          marginRight: 0,
          marginLeft: "8px",
        },
        [".core-button-icon"]: {
          width: "24px",
          height: "24px",
        },
      },
    },
  },
});