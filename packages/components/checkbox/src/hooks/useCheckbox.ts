import { useMemo, useState } from "react";
import { CheckboxProps } from "../checkboxProps";
import { Box, BoxIconStyled, InputStyled } from "../checkboxStyled";
import CheckIcon from "../icons/CheckIcon";
import IndeterminateIcon from "../icons/IndeterminateIcon";

export const useCheckbox = (props: CheckboxProps) => {
  const {
    as = "label",
    title,
    icon,
    isChecked: checked = false,
    disabled = false,
    size = "md",
    color = "primary",
    children,
    radius = 'md',
    isIndeterminate = false
  } = props;
  const [isChecked, setIsChecked] = useState(checked);
  const handleCheckboxChange = (e: any) => {
    if (!disabled) {
      setIsChecked(!isChecked);
    }
  };
  const Container = useMemo(() => Box(as), [as]);
  return {
    Container,
    title,
    InputStyled,
    icon,
    CheckIcon,
    BoxIconStyled,
    isChecked,
    handleCheckboxChange,
    disabled,
    size,
    color,
    children,
    radius,
    isIndeterminate,
    IndeterminateIcon
  };
};
