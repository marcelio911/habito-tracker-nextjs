import { ButtonProps } from "@nextui-org/react";
import {SVGProps} from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface BugButtonProps extends React.FC<ButtonProps> {
  id?: number,
  size?: "sm" | "md" | "lg" ;
  label?: string ;
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger" ;
  variant?: "light" | "shadow" | "flat" | "solid" | "faded" | "bordered" | "ghost" ;
  destination?: string,
  clickHandler?: () => void,
  isIconOnly?: boolean,
  iconStart?: React.ReactElement<IconSvgProps>,
  iconEnd?: React.ReactElement<IconSvgProps>,
  isDisabled?: boolean,
  isLoading?: boolean,
  fullWidth?: boolean,
  children?: string,
}
