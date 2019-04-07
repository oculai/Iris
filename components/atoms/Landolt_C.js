import React from "react";
import { Svg } from "expo";

export default function LandoltC(props) {
  // C
  const fill = props.fill || "#000";
  const width = props.width.toString() || "133";
  const height = props.height.toString() || "126.8";
  const viewBox = props.viewBox || "0 0 300 126.8";

  //   Circle
  const cX = props.cx || "63";
  const cY = props.cy || "63.4";
  const cR = props.cr || "37.8";
  const cF = props.cf || "#FFF";

  // Rotation
  const angle = props.angle || "90";

  return (
    <Svg
      // style={{
      //   transform: [{ rotate: `${angle.toString()}deg` }],
      //   backgroundColor: "red"
      // }}
      style={{ transform: [{ rotate: `${angle.toString()}deg` }] }}
      width={width}
      height={height}
      viewBox={viewBox}
    >
      <Svg.Path
        fill={fill}
        fill-rule="evenodd"
        d="M99.4,73.5H126c-4.9,30.2-31,53.2-62.6,53.2C28.4,126.8,0,98.4,0,63.4S28.4,0,63.4,0C95,0,121.1,23.1,126,53.3H99.4V73.5z"
      />
      <Svg.Circle fill={cF} cx={cX} cy={cY} r={cR} />
    </Svg>
  );
}
