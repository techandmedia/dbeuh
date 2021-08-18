import { Button } from "antd";
import { ButtonProps } from "antd/lib/button";

export const NewButton = (props: ButtonProps) => {
  const { children } = props;
  return <Button {...props}>{children}</Button>;
};
