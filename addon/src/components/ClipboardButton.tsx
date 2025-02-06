import React from "react";
import { ReactNode } from "react";
import { useClipboard } from "@custom-react-hooks/use-clipboard";

interface ClipboardButtonProps {
  button: ReactNode;
  value: string;
}

export const ClipboardButton = ({ button, value }: ClipboardButtonProps) => {
  const { copyToClipboard } = useClipboard();

  return <span onClick={() => copyToClipboard(value)}>{button}</span>;
};
