import React from "react";
import { Button } from "antd";
import { ButtonProps } from "antd/lib/button";
import "antd/lib/button/style/index.css";

export const NewButton = (props: ButtonProps) => {
  const { children } = props;
  return <Button {...props}>{children}</Button>;
};
