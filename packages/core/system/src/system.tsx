import React from "react";
import { As, InternalForwardRefRenderFunction, PropsOf, RightJoinProps } from "./types";

export function forwardRef<Component extends As, Props extends object, OmitKeys extends keyof any = never>(
  component: React.ForwardRefRenderFunction<
  any,
  RightJoinProps<PropsOf<Component>, Props> & {
    as?: As
  }
  >,
) {
  return React.forwardRef(component) as InternalForwardRefRenderFunction<Component, Props, OmitKeys>
}
