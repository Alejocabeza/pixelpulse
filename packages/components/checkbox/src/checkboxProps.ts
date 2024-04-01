import React from "react";

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * @description this is the html tag
   */
  as?: string;
  /**
   * @description this is the title
   */
  title?: string;
  /**
   * @description this is the icon
   */
  icon?: JSX.Element | React.ReactElement | undefined;
  /**
   * @description this is the isChecked
   */
  isChecked?: boolean;
  /**
   * @description this is the disabled
   */
  disabled?: boolean;
  /**
   * @description this is the size
   */
  size?: "sm" | "md" | "lg";
  /**
   * @description this is the color
   */
  color?: "primary" | "secondary" | "success" | "warning" | "danger" | "default";
  /**
   * @description this is the raidus
   */
  radius?: "full" | "lg" | "md" | "sm" | "none";
  /**
   * @description this is the indeterminate
   */
  isIndeterminate?: boolean;
}
