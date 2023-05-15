import { css } from "../../theme/stitches.config";


export const ButtonBase = css({ 
  WebkitAppearance: "none",
  WebkitTapHighlightColor: "transparent",
  WebkitUserSelect: "none",
  MozUserSelect: "none",
  MsUserSelect: "none",
  userSelect: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexShrink: "0",
  outline: "none",
  cursor: "pointer",
  border: "0",
  fontFamily: "$heading",
  background: "transparent",
  position: "relative",
});