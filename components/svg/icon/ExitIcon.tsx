import type { MouseEventHandler } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { twMerge } from "tailwind-merge";

import { MotionSvg } from "@/types/framer_motion_types";

interface ExitIconProps {
  onClick?: MouseEventHandler<SVGSVGElement>;
  tooltip?: string;
  size?: number;
  nonBouncing?: boolean;
}

const ExitIcon: React.FC<ExitIconProps> = ({
  onClick,
  tooltip,
  size = 33,
  nonBouncing = false,
}) => (
  <div data-tooltip-id={`tooltip-${tooltip}`}>
    <MotionSvg
      onClick={onClick}
      className={twMerge("sn", !nonBouncing && onClick && "cp")}
      whileTap={{ scale: !nonBouncing && onClick ? 0.85 : 1 }}
      width={size}
      height="27"
      viewBox="0 0 33 27"
      fill="none"
      style={{ scale: 0.9 }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.9">
        <path
          d="M7.24884 9.50851C7.7402 9.00767 7.74218 8.19361 7.25325 7.69024C6.76433 7.18689 5.96965 7.18487 5.47827 7.68572L7.24884 9.50851ZM0.432762 12.8285C-0.0586016 13.3294 -0.0605764 14.1435 0.428344 14.6468C0.917265 15.1501 1.71195 15.1522 2.20333 14.6515L0.432762 12.8285ZM2.20333 12.8285C1.71195 12.3277 0.917265 12.3298 0.428344 12.8331C-0.0605764 13.3364 -0.0586016 14.1505 0.432762 14.6515L2.20333 12.8285ZM5.47827 19.7943C5.96965 20.2951 6.76433 20.293 7.25325 19.7897C7.74218 19.2864 7.7402 18.4723 7.24884 17.9713L5.47827 19.7943ZM1.31804 12.4543C0.624877 12.4543 0.0629425 13.0299 0.0629425 13.74C0.0629425 14.45 0.624877 15.0257 1.31804 15.0257V12.4543ZM24.7466 15.0257C25.4398 15.0257 26.0017 14.45 26.0017 13.74C26.0017 13.0299 25.4398 12.4543 24.7466 12.4543V15.0257ZM5.47827 7.68572L0.432762 12.8285L2.20333 14.6515L7.24884 9.50851L5.47827 7.68572ZM0.432762 14.6515L5.47827 19.7943L7.24884 17.9713L2.20333 12.8285L0.432762 14.6515ZM1.31804 15.0257H24.7466V12.4543H1.31804V15.0257Z"
          fill="#C52222"
        />
        <path
          d="M11.3589 18.8828C11.3589 22.6699 14.3559 25.74 18.0527 25.74H24.7466C28.4435 25.74 31.4405 22.6699 31.4405 18.8828V8.59713C31.4405 4.81004 28.4435 1.73999 24.7466 1.73999H18.0527C14.3559 1.73999 11.3589 4.81004 11.3589 8.59713"
          stroke="#C52222"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </MotionSvg>
    {tooltip && (
      <ReactTooltip
        id={`tooltip-${tooltip}`}
        place="bottom-end"
        offset={10}
        content={tooltip}
      />
    )}
  </div>
);

export default ExitIcon;
