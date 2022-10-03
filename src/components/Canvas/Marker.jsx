import { useState } from "react";
import { Circle, Group, Text } from "react-konva";

export default function Marker(props) {
  const [isDragging, setIsDragging] = useState(false);
  const { marker, onDragStart, onDragEnd } = props;

  return (
    <Group
      x={marker.x}
      y={marker.y}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <Text text={marker.id} y={-50} x={-10} align="center" />
      <Text text={"X: " + marker.x} y={-35} x={-10} align="center" />
      <Text text={"Y: " + marker.y} y={-20} x={-10} align="center" />
      <Circle
        stroke={isDragging ? "gray" : "black"}
        radius={5}
        fill="lightgray"
      />
    </Group>
  );
}
