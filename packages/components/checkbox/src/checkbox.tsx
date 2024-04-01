import { forwardRef } from "pixelui-system";
import React, { ReactElement, memo, useMemo } from "react";
import { CheckboxProps } from "./checkboxProps";
import { useCheckbox } from "./hooks/useCheckbox";

const Checkbox = forwardRef<"input", CheckboxProps>((props, ref) => {
  const {
    title,
    InputStyled,
    isChecked,
    handleCheckboxChange,
    BoxIconStyled,
    icon,
    CheckIcon,
    Container,
    disabled,
    size,
    color,
    children,
    radius,
    isIndeterminate,
    IndeterminateIcon,
  } = useCheckbox(props);
  return (
    <Container ref={ref} disabled={disabled} size={size}>
      <InputStyled
        size={size}
        color={color}
        radius={radius}
      >
        <input type="checkbox" checked={isChecked} disabled={disabled} onChange={handleCheckboxChange} />
        <BoxIconStyled color={color}>
          {isIndeterminate ? <IndeterminateIcon /> : icon || <CheckIcon/>}
        </BoxIconStyled>
      </InputStyled>
      {title || children}
    </Container>
  );
});

Checkbox.displayName = "PixelUI Checkbox";

export default memo(Checkbox);
