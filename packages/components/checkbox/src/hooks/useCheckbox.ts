import { useMemo } from "react";
import { Container } from "../../../avatar/src/avatarStyles";
import { CheckboxProps } from "../checkboxProps";

export const useCheckbox = (props: CheckboxProps) => {
  const {
    as = 'span',
    ref,
    refInput,
    title,
  } = props
  const Component = useMemo(() => Container(as), [as])
  return {
    Component,
    title
  }
}
