import React, { CSSProperties } from "react";
import { Manager, Reference, Popper } from "react-popper";
import { Placement } from "@popperjs/core";
import PopupContent from "./inner";
import { StandardProperties } from "csstype";
import { DivProps } from "@jonny/base-ui";

export const Popover: React.FC<{
  children: any;
  preferredPlacement: Placement;
  onClose: () => void;
  tip: any;
  borderWidth?: number;
  borderColor?: string;
  borderStyle?: StandardProperties["borderTopStyle"];
  arrowSize?: number;
  bubbleProps?: DivProps;
  arrowProps?: DivProps;
  popupVisible: boolean;
  style?: CSSProperties;
  arrowStyle?: CSSProperties;
  bubbleStyle?: CSSProperties;
  bubbleBorderWidth?: number;
  arrowBorderWidth?: number;
  bubbleBorderColor?: string;
  arrowBorderColor?: string;
  bubbleBorderStyle?: StandardProperties["borderTopStyle"];
  arrowBorderStyle?: StandardProperties["borderTopStyle"];
  strategy?: "absolute" | "fixed";
}> = ({
  children,
  preferredPlacement,
  onClose,
  tip,
  borderWidth = 1,
  borderColor,
  borderStyle,
  arrowSize,
  bubbleProps,
  arrowProps,
  popupVisible,
  style = {},
  arrowStyle = {},
  bubbleStyle = {},
  bubbleBorderWidth,
  arrowBorderWidth,
  bubbleBorderColor,
  arrowBorderColor,
  bubbleBorderStyle,
  arrowBorderStyle,
  strategy,
}) => (
  <Manager>
    <Reference>{({ ref }) => React.cloneElement(children, { ref })}</Reference>
    {popupVisible ? (
      <Popper
        strategy={strategy ?? "fixed"}
        placement={preferredPlacement}
        modifiers={[
          {
            name: "offset",
            options: {
              offset: [0, Math.floor((arrowSize ?? 12) / 2) + borderWidth + 2],
            },
          },
        ]}
      >
        {({ ref, arrowProps: popperArrowProps, ...popperProps }) => (
          <PopupContent
            passRef={ref}
            {...popperProps}
            popperArrowProps={popperArrowProps}
            borderWidth={borderWidth}
            borderStyle={borderStyle}
            borderColor={borderColor}
            onClose={onClose}
            arrowSize={arrowSize}
            arrowProps={arrowProps}
            bubbleProps={bubbleProps}
            arrowStyle={arrowStyle}
            bubbleStyle={bubbleStyle}
            visible={popupVisible}
            commonStyle={style}
            bubbleBorderWidth={bubbleBorderWidth}
            arrowBorderWidth={arrowBorderWidth}
            bubbleBorderColor={bubbleBorderColor}
            arrowBorderColor={arrowBorderColor}
            bubbleBorderStyle={bubbleBorderStyle}
            arrowBorderStyle={arrowBorderStyle}
          >
            {tip}
          </PopupContent>
        )}
      </Popper>
    ) : null}
  </Manager>
);
