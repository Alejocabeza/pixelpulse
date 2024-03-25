import React from "react"

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * @description this is the html tag
   */
  as?: string
  /**
   * @description this is the title
   */
  title?: string
  /**
   * @description this is the Ref of Container
   */
  ref?: React.RefAttributes<HTMLDivElement>
  /**
   * @description this is the ref of Input type Checkbox
   */
  refInput?: React.RefAttributes<HTMLInputElement>
}
