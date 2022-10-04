import React from "react";
import { useState } from "react";
import { Circle, Group, Text } from "react-konva";

export default function Marker(props: any) {
  const [isDragging, setIsDragging] = useState(false);
  const { marker, onDragEnd, onRightClick, showCoords, id } = props;

  return (
    <Group
      id={marker.id || id}
      x={marker.x}
      y={marker.y}
      draggable
      onDragStart={(event) => {
        setIsDragging(true);
      }}
      onDragEnd={(event) => {
        onDragEnd(event);
        setIsDragging(false);
      }}
    >
      {marker.label && <Text text={marker.label} x={10} />}
      {showCoords && (
        <>
          <Text text={"X: " + marker.x} y={-35} x={-10} align="center" />
          <Text text={"Y: " + marker.y} y={-20} x={-10} align="center" />
        </>
      )}
      <Circle
        onClick={(event) => {
          if (event.evt.button === 2 && onRightClick) {
            onRightClick(event);
            return;
          }
          event.evt.preventDefault();
          event.cancelBubble = true;
        }}
        stroke={isDragging ? "gray" : marker.colour ? marker.colour : "black"}
        radius={5}
        fill="lightgray"
      />
    </Group>
  );
}
