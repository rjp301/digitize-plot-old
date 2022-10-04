import { useState } from "react";
import { Circle, Group, Text } from "react-konva";

export default function Marker(props) {
  const [isDragging, setIsDragging] = useState(false);
  const { marker, onDragStart, onDragEnd, onRightClick, showCoords } = props;

  return (
    <Group
      id={marker.id}
      x={marker.x}
      y={marker.y}
      draggable
      onDragStart={(event) => {
        onDragStart(event);
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
        onContextMenu={marker.permanent ? null : onRightClick}
        stroke={isDragging ? "gray" : marker.colour ? marker.colour : "black"}
        radius={5}
        fill="lightgray"
      />
    </Group>
  );
}
