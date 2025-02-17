import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

type ServiceDetail = {
  title: string;
  image: string;
  description: string;
}

export type Service = {
  title: string;
  image: string;
  description: string;
  addtionalDetails?: ServiceDetail[];
}