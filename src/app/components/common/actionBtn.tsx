import React from "react";
import { IconType } from "react-icons";
import { FaPlay, FaStop, FaTrash } from "react-icons/fa";

interface ActionButtonProps {
  onClick: (e: React.MouseEvent) => void;
  icon: IconType;
  color: string;
  children: React.ReactNode;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  onClick,
  icon: Icon,
  color,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-2 py-1 text-white ${color} rounded-full flex items-center space-x-1 hover:brightness-110`}
    >
      <Icon />
      <div>{children}</div>
    </button>
  );
};

export default ActionButton;
