import { styled } from "@stitches/react";

export const Box = (as?: any) =>
  styled(as, {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: ".2rem",
    variants: {
      disabled: {
        true: {
          opacity: 0.8,
          cursor: "not-allowed",
        },
      },
      size: {
        sm: {
          fontSize: ".8rem",
        },
        md: {
          fontSize: "1rem",
        },
        lg: {
          fontSize: "1.2rem",
        },
      },
    },
  });

export const InputStyled = styled("div", {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignContent: "center",
  backgroundColor: 'transparent',
  overflow: 'hidden',
  '& > input' : {
    appearance: 'none',
    margin: '0px',
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
    border: ".05px solid #cccccc",
    borderRadius: 'inherit',
    "&:checked": {
      border: 'none',
      "&:checked + span": {
        display: "block",
      },
    },
  },
  variants: {
    size: {
      sm: {
        width: "1rem",
        height: "1rem",
      },
      md: {
        width: "1.4rem",
        height: "1.4rem",
      },
      lg: {
        width: "1.6rem",
        height: "1.6rem",
      },
    },
    color: {
      default: {
        "& > input:checked": {
          backgroundColor: "#cccccc",
        },
      },
      primary: {
        "& > input:checked": {
          backgroundColor: "rgb(90 90 255)",
        },
      },
      secondary: {
        "& > input:checked": {
          backgroundColor: "rgb(255 90 163)",
        },
      },
      success: {
        "& > input:checked": {
          backgroundColor: "rgb(90 255 90)",
        },
      },
      warning: {
        "& > input:checked": {
          backgroundColor: "rgb(255 255 90)",
        },
      },
      danger: {
        "& > input:checked": {
          backgroundColor: "rgb(255 90 90)",
        },
      },
    },
    radius: {
      full: {
        borderRadius: "9999px",
      },
      lg: {
        borderRadius: "8px",
      },
      md: {
        borderRadius: "6px",
      },
      sm: {
        borderRadius: "3px",
      },
      none: {
        borderRadius: "0px",
      },
    },
  },
});

export const BoxIconStyled = styled("span", {
  position: "absolute",
  left: "50%",
  top: "50%",
  height: '100%',
  width: '100%',
  transform: "translate(-50%, -50%)",
  display: "none",
  color: "white",
  "& > svg": {
    width: "100%",
  },
  variants: {
    color: {
      default: {
        color: "white",
      },
      primary: {
        color: "white",
      },
      secondary: {
        color: "white",
      },
      success: {
        color: "black",
      },
      warning: {
        color: "black",
      },
      danger: {
        color: "white",
      },
    },
  },
});
