import { MouseEventHandler } from "react";
import { colorBaseTypes, sizeBaseTypes } from "./base.types";

export interface ButtonBaseProps {
  label?: string,
  color?: colorBaseTypes,
  disable?: boolean,
  size?: sizeBaseTypes,
  onClick?: MouseEventHandler<HTMLButtonElement>,
}