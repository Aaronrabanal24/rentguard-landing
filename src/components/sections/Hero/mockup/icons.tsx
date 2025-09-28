import type { ReactNode, SVGProps } from "react";
import { cn } from "@/lib/utils";

interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

const baseProps: Pick<SVGProps<SVGSVGElement>, "fill" | "stroke" | "strokeLinecap" | "strokeLinejoin" | "strokeWidth"> = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.6,
};

function createIcon(path: ReactNode | ReactNode[], viewBox = "0 0 24 24") {
  return function Icon({ className, ...props }: IconProps) {
    return (
      <svg
        viewBox={viewBox}
        className={cn("h-5 w-5", className)}
        {...baseProps}
        {...props}
      >
        {path}
      </svg>
    );
  };
}

export const MessageSquareIcon = createIcon([
  <path key="outline" d="M21 15.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10.5a2 2 0 0 0 2 2h6l3.8 3.5c.9.8 2.2.2 2.2-1V17.5h2a2 2 0 0 0 2-2z" />,
]);

export const CalendarIcon = createIcon([
  <rect key="frame" x="3.5" y="5" width="17" height="15" rx="2" />,
  <path key="header" d="M3.5 9h17" />,
  <path key="rings" d="M8 3v4M16 3v4" />,
]);

export const CheckCircleIcon = createIcon([
  <circle key="circle" cx="12" cy="12" r="9" />,
  <path key="check" d="m8.5 12.5 2.5 2.5 4.5-5.5" />,
]);

export const CheckCircleSmallIcon = createIcon([
  <circle key="circle" cx="12" cy="12" r="9" />,
  <path key="check" d="m8.8 12.2 1.8 1.8 3.6-4.2" />,
]);

export const ReceiptIcon = createIcon([
  <path key="outline" d="M6 3h12l1.2 2v14l-1.2-1-1.2 1-1.2-1-1.2 1-1.2-1-1.2 1-1.2-1-1.2 1-1.2-1L6 19V3z" />,
  <path key="lines" d="M9 8h6m-6 4h6" />,
]);

export const FileTextIcon = createIcon([
  <path key="outline" d="M7 3h7l5 5v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />,
  <path key="fold" d="M14 3v5h5" />,
  <path key="lines" d="M9 13h6m-6 4h4" />,
]);

export const DollarIcon = createIcon([
  <path key="s" d="M16.5 8.5a4.5 4.5 0 0 0-4.5-4.5h-1A4 4 0 0 0 7.5 8c0 2.5 2.5 3.2 4.8 3.8 2.3.6 4.2 1.4 4.2 3.7 0 2.2-1.9 3.5-4.5 3.5h-1a4.6 4.6 0 0 1-4.5-4.5" />,
  <path key="bars" d="M12 3v18" />,
]);

export const ArrowUpRightIcon = createIcon([
  <path key="line" d="M7 17 17 7" />,
  <path key="arrow" d="M9 7h8v8" />,
]);

export const ShieldIcon = createIcon([
  <path key="outline" d="M4.5 6.5 12 3l7.5 3.5V11c0 4.9-3.5 8.6-7.5 10-4-1.4-7.5-5.1-7.5-10z" />,
  <path key="check" d="m8.5 12.5 2 2 4-4.5" />,
]);

export const ClockIcon = createIcon([
  <circle key="outline" cx="12" cy="12" r="9" />,
  <path key="hands" d="M12 7v5l3 3" />,
]);

export const CheckIcon = createIcon([
  <path key="check" d="m5.5 12.5 3.5 3.5L18.5 6" />,
]);

export const MapPinIcon = createIcon([
  <path key="outline" d="M12 21c-3-3.8-6.5-7.5-6.5-11.5a6.5 6.5 0 1 1 13 0C18.5 13.5 15 17.2 12 21z" />,
  <circle key="center" cx="12" cy="9.5" r="1.8" />,
]);

export const UsersIcon = createIcon([
  <path key="head1" d="M8.5 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />,
  <path key="head2" d="M17.5 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />,
  <path key="body1" d="M4 18c0-2.5 2-4.5 4.5-4.5S13 15.5 13 18" />,
  <path key="body2" d="M12 18c0-2 1.6-3.7 3.5-3.7S19 16 19 18" />,
]);
