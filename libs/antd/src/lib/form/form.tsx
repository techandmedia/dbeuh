/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormItemProps, Form, FormProps, Card, CardProps } from 'antd';
import { formItemLayoutDefault, tailFormItemLayoutDefault } from './form-default';

export interface IFormItem extends FormItemProps {
  key: string;
  component: React.ReactNode;
}

export interface IForm {
  formfields: IFormItem[];
  type?: 'single-column' | 'dual-column';
  draftbutton?: React.ReactNode;
  submitbutton?: React.ReactNode;
  submitbuttonPosition?: 'default' | 'in-card-title';
  cardProps?: CardProps;
  formProps?: FormProps;
  formItemLayout?: any;
  tailFormItemLayout?: any;
}

const { useForm } = Form;

function NewForm(props: IForm) {
  const formItemLayout = { ...formItemLayoutDefault, ...props.formItemLayout };
  const tailFormItemLayout =
    props.formProps?.layout === 'vertical'
      ? {}
      : { ...tailFormItemLayoutDefault, ...props.tailFormItemLayout };

  return (
    <Form {...props.formProps} {...formItemLayout}>
      <Card
        {...props.cardProps}
        title={props.formProps?.name}
        extra={
          props.submitbuttonPosition === 'in-card-title' && (
            <Form.Item style={{ marginBottom: 0 }}>
              {props.submitbutton && props.submitbutton}
            </Form.Item>
          )
        }
      >
        {props.formfields.map(f => (
          <Form.Item {...f}>{f.component}</Form.Item>
        ))}
        {(props.submitbuttonPosition === 'default' || !props.submitbuttonPosition) && (
          <Form.Item {...tailFormItemLayout}>{props.submitbutton && props.submitbutton}</Form.Item>
        )}
      </Card>
    </Form>
  );
}

export { NewForm as Form, useForm };
