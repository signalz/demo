import React from "react";
import { useFocusRing } from "@react-aria/focus";
import { useButton } from "@react-aria/button";
import { ButtonVariantsProps, StyledButton } from "./button.styles";
import { AriaButtonProps } from "@react-types/button";
import type { FocusRingAria } from "@react-aria/focus";
import { CSS } from "../theme/stitches.config";
import { useDOMRef } from "../../utils/dom";
import { Icon } from "../icon/icon";
import { SvgIconProps } from "icons";
import type { PressEvent } from "@react-types/shared";

export const tuple = <T extends string[]>(...args: T) => args;

export const intentColors = tuple(
  "primary",
  "secondary",
  "green",
  "purple",
  "yellow",
  "orange",
  "cyan",
  "blue",
  "lime"
);

export const variants = tuple("solid", "border", "ghost");

export const sizes = tuple("sm", "lg");

export type NormalColors = typeof intentColors[number];
export type Variant = typeof variants[number];
export type Sizes = typeof sizes[number];

export interface Props extends AriaButtonProps {
  intent?: NormalColors;
  icon?: React.FC<SvgIconProps>;
  size?: Sizes;
  iconRight?: React.FC<SvgIconProps>;
  variant?: Variant;
  autoFocus?: boolean;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  isLoading?: boolean;
  children?: string | JSX.Element;
}

type NativeAttrs = Omit<React.ButtonHTMLAttributes<unknown>, keyof Props>;

interface IFocusRingAria extends FocusRingAria {
  focusProps: Omit<React.HTMLAttributes<HTMLElement>, keyof ButtonProps>;
}

export type ButtonProps = Props &
  NativeAttrs &
  Omit<ButtonVariantsProps, "intent"> & {
    css?: CSS;
    intent?: string;
  };

const ButtonRender = (
  {
    as,
    css,
    intent,
    variant,
    disabled,
    isLoading = false,
    children,
    icon,
    size = "sm",
    iconRight,
    onClick,
    onPress,
    onPressStart,
    onPressEnd,
    onPressChange,
    onPressUp,
    autoFocus = false,
    ...btnProps
  }: ButtonProps,
  ref: React.Ref<HTMLButtonElement | null>
) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handlePress = (e: PressEvent) => {
    if (e.pointerType === "keyboard" || e.pointerType === "virtual") {
      // TODO: take this out and deprecate onClick function for next release (only use the @react-aria/button impl)
      onClick?.(e as never);
    }
    onPress?.(e);
  };

  const buttonRef = useDOMRef(ref);
  const { buttonProps } = useButton(
    {
      ...btnProps,
      onClick: handleClick,
      isDisabled: disabled || isLoading,
      elementType: as,
      onPress: handlePress,
      onPressStart,
      onPressEnd,
      onPressChange,
      onPressUp,
    } as AriaButtonProps,
    buttonRef
  );
  const { isFocusVisible, focusProps }: any = useFocusRing({
    autoFocus,
  });

  const hasIcon = icon || iconRight;
  const isChildLess = React.Children.count(children) === 0;
  //const isRight = Boolean(iconRight);

  const isIconOnly = Boolean(isChildLess && hasIcon);

  return (
    <StyledButton
      intent={intent}
      variant={variant}
      size={size}
      ref={buttonRef}
      as={as}
      isFocusVisible={isFocusVisible && !disabled}
      disabled={disabled || isLoading}
      isDisabled={disabled || isLoading}
      isLoading={isLoading}
      isIconOnly={isIconOnly}
      css={css}
      {...buttonProps}
      {...focusProps}
      {...btnProps}
    >
      <div className="core-button-children">
        {icon && (
          <Icon
            component={icon}
            className="core-button-icon"
            size={size == "sm" ? "sm" : "md"}
          ></Icon>
        )}
        {children && <span>{children}</span>}
        {iconRight && (
          <Icon
            component={iconRight}
            className="core-button-icon"
            size={size == "sm" ? "sm" : "md"}
          ></Icon>
        )}
      </div>
      <div className="core-button-loading">Loading</div>
    </StyledButton>
  );
};

// type ButtonComponent<T, P = {}> = React.ForwardRefExoticComponent<
//   PropsWithoutRef<P> & RefAttributes<T>
// >;

interface ButtonComponent extends React.ForwardRefExoticComponent<ButtonProps> {
  displayName: string;
}

export const Button = React.forwardRef(ButtonRender) as ButtonComponent;

Button.displayName = "Button";
