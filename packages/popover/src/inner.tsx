import { Content, DivProps } from "@jonny/base-ui";
import { LineStyle } from "csstype";
import Popper from "popper.js";
import React, { CSSProperties, useEffect, useRef } from "react";
import { PopperArrowProps, RefHandler } from "react-popper";

type PopupProps = {
  onClose: () => void;
  passRef: React.Ref<any>;
  style: CSSProperties;
  placement: Popper.Placement;
  borderWidth?: number;
  borderColor?: string;
  borderStyle?: LineStyle;
  popperArrowProps: PopperArrowProps;
  children: React.ReactNode;
  arrowSize?: number;
  bubbleProps?: DivProps;
  arrowProps?: DivProps;
  visible: boolean;
  commonStyle: CSSProperties;
  bubbleStyle: CSSProperties;
  arrowStyle: CSSProperties;
  bubbleBorderWidth?: number;
  arrowBorderWidth?: number;
  bubbleBorderColor?: string;
  arrowBorderColor?: string;
  bubbleBorderStyle?: LineStyle;
  arrowBorderStyle?: LineStyle;
};

export default (props: PopupProps): JSX.Element => {
  const {
    passRef,
    visible,
    style,
    placement,
    popperArrowProps,
    children,
    borderWidth = 0,
    borderColor = "#b3b3b3",
    borderStyle = "solid",
    arrowSize = 12,
    bubbleProps = {},
    arrowProps = {},
    commonStyle,
    bubbleStyle,
    arrowStyle,
    bubbleBorderWidth,
    arrowBorderWidth,
    bubbleBorderColor,
    arrowBorderColor,
    bubbleBorderStyle,
    arrowBorderStyle,
  } = props;

  const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickOff = (evt: MouseEvent) => {
      const { current } = el;
      if (!current) {
        return;
      }
      if (!current.contains(evt.target as Node)) {
        document.removeEventListener("click", clickOff);
        props.onClose();
      }
    };
    const keyPress = (evt: KeyboardEvent) => {
      if (el.current === null) {
        return;
      }
      const keyCode = evt.keyCode || evt.which;
      if (keyCode === 27) {
        props.onClose();
      }
    };
    document.addEventListener("click", clickOff);
    document.addEventListener("keydown", keyPress);

    return () => {
      document.removeEventListener("click", clickOff);
      document.removeEventListener("keydown", keyPress);
    };
  }, [props]);

  return (
    <div ref={el}>
      <Content
        borderWidth={borderWidth}
        bubbleBorderWidth={bubbleBorderWidth}
        arrowBorderWidth={arrowBorderWidth}
        passRef={passRef}
        borderColor={borderColor}
        bubbleBorderColor={bubbleBorderColor}
        arrowBorderColor={arrowBorderColor}
        borderStyle={borderStyle}
        bubbleBorderStyle={bubbleBorderStyle}
        arrowBorderStyle={arrowBorderStyle}
        visible={visible}
        arrowSize={arrowSize}
        placement={placement}
        bubbleProps={bubbleProps}
        bubbleStyle={{
          paddingLeft: 12,
          paddingRight: 12,
          paddingTop: 12,
          paddingBottom: 12,
          backgroundColor: "white",
          color: "black",
          fontWeight: 300,
          ...commonStyle,
          ...bubbleStyle,
        }}
        arrowProps={arrowProps}
        arrowStyle={{ backgroundColor: "white", ...commonStyle, ...arrowStyle }}
        popperArrowProps={popperArrowProps}
        style={style}
        commonStyle={commonStyle}
      >
        {children}
      </Content>
    </div>
  );
};
