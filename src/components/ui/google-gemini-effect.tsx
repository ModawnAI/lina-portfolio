"use client";

import { cn } from "@/lib/utils";
import { motion, MotionValue } from "framer-motion";
import React from "react";

const transition = {
  duration: 0,
  ease: "linear",
};

export const GoogleGeminiEffect = ({
  pathLengths,
  title,
  description,
  className,
}: {
  pathLengths: MotionValue<number>[];
  title?: string;
  description?: string;
  className?: string;
}) => {
  return (
    <div className={cn("sticky top-0 w-full", className)}>
      <svg
        width="1440"
        height="890"
        viewBox="0 0 1440 890"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -top-60 md:-top-40 w-full"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#18CCFC" stopOpacity="0" />
            <stop offset="32.5%" stopColor="#18CCFC" />
            <stop offset="100%" stopColor="#6344F5" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#AE48FF" stopOpacity="0" />
            <stop offset="32.5%" stopColor="#6344F5" />
            <stop offset="100%" stopColor="#18CCFC" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#18CCFC" stopOpacity="0" />
            <stop offset="32.5%" stopColor="#18CCFC" />
            <stop offset="100%" stopColor="#AE48FF" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6344F5" stopOpacity="0" />
            <stop offset="32.5%" stopColor="#AE48FF" />
            <stop offset="100%" stopColor="#18CCFC" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#AE48FF" stopOpacity="0" />
            <stop offset="32.5%" stopColor="#18CCFC" />
            <stop offset="100%" stopColor="#6344F5" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Path 1 */}
        <motion.path
          d="M0 663C145.5 663 191 666.265 269 647C326.5 630.84 339.5 601 429 581C518.5 561 536 621 603 597.5C670 574 695 524 795 522.5C895 521 909 546 975 560.5C1041 575 1068.5 545.5 1131 540C1193.5 534.5 1209.5 558 1274 566.5C1338.5 575 1360 540 1440 535"
          stroke="url(#grad1)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[0] }}
          transition={transition}
        />

        {/* Path 2 */}
        <motion.path
          d="M0 587C95 587 168 600 243 593.5C318 587 378 525 466 517.5C554 510 591.5 561 674 562.5C756.5 564 790 503 884 500C978 497 998 533 1092 545C1186 557 1200 522 1278.5 524.5C1357 527 1392 560 1440 560"
          stroke="url(#grad2)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[1] }}
          transition={transition}
        />

        {/* Path 3 */}
        <motion.path
          d="M0 514C148.5 514 195 508.5 280 510C365 511.5 392 537 470 536C548 535 583 502 657 499.5C731 497 765.5 534 845 534C924.5 534 964.5 499.5 1040 500C1115.5 500.5 1158 534 1227 533.5C1296 533 1318.5 503 1440 503"
          stroke="url(#grad3)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[2] }}
          transition={transition}
        />

        {/* Path 4 */}
        <motion.path
          d="M0 438C81.5 438 137 438 207 443C277 448 318 464 385 459.5C452 455 491 419 566.5 417C642 415 682 445 749.5 444.5C817 444 850.5 414 926.5 414.5C1002.5 415 1036 443.5 1108 444C1180 444.5 1213 419 1287.5 418.5C1362 418 1408 444 1440 444"
          stroke="url(#grad4)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[3] }}
          transition={transition}
        />

        {/* Path 5 */}
        <motion.path
          d="M0 363C76 363 126 355 196 361C266 367 309 387 378 385C447 383 485 362 558 361C631 360 674 387 740 387C806 387 844 361.5 918 361C992 360.5 1025.5 387 1098 387C1170.5 387 1207 362 1283 361.5C1359 361 1410.5 387 1440 387"
          stroke="url(#grad5)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[4] }}
          transition={transition}
        />
      </svg>

      {(title || description) && (
        <div className="w-full h-[890px] flex flex-col items-center justify-center bg-transparent">
          {title && (
            <p className="text-lg md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300 pointer-events-none">
              {title}
            </p>
          )}
          {description && (
            <p className="text-xs md:text-xl font-normal text-center text-neutral-400 max-w-md mx-auto pointer-events-none mt-4">
              {description}
            </p>
          )}
        </div>
      )}
    </div>
  );
};
