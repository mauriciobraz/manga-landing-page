export interface BaseSvgIconProps extends React.SVGProps<SVGSVGElement> {
  /** @default currentColor */
  color?: string;

  /** @default 24 */
  size?: string | number;
}
