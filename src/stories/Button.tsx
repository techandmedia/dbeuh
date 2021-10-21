import './button.css';
import { Button, ButtonProps } from 'antd';

interface IButtonProps extends ButtonProps {
  label?: string;
}

export default function NewButton(props: IButtonProps) {
  return <Button {...props}>{props.label ? props.label : props.children}</Button>;
}
