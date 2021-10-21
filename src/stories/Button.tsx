import { Button, ButtonProps } from 'antd';

interface IButtonProps extends ButtonProps {
  label?: string;
}

/**
To trigger an operation.

When To Use

A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic.

In Ant Design we provide 5 types of button

- Primary button: indicate the main action, one primary button at most in one section.
- Default button: indicate a series of actions without priority.
- Dashed button: used for adding action commonly.
- Text button: used for the most secondary action.
- Link button: used for external links.

And 4 other properties additionally

- danger: used for actions of risk, like deletion or authorization.
- ghost: used in situations with complex background, home pages usually.
- disabled: when actions are not available.
- loading: add loading spinner in button, avoiding multiple submits too.
**/
export function NewButton(props: IButtonProps) {
  return <Button {...props}>{props.label ? props.label : props.children}</Button>;
}
