/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormItemProps, Form, FormProps, Card, CardProps } from 'antd';
import { CSSProperties } from 'react';
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
  itemFormStyle?: CSSProperties;
  buttonFormStyle?: {
    default?: CSSProperties;
    inCardTitle?: CSSProperties;
  };
  noCard?: boolean;
}

const { useForm } = Form;

function NewForm(props: IForm) {
  const formItemLayout = { ...formItemLayoutDefault, ...props.formItemLayout };
  const tailFormItemLayout =
    props.formProps?.layout === 'vertical'
      ? {}
      : { ...tailFormItemLayoutDefault, ...props.tailFormItemLayout };

  if (props.noCard) {
    return (
      <Form {...props.formProps} {...formItemLayout}>
        {props.formfields.map(f => (
          <Form.Item {...f} style={props.itemFormStyle}>
            {f.component}
          </Form.Item>
        ))}
        {(props.submitbuttonPosition === 'default' || !props.submitbuttonPosition) && (
          <Form.Item {...tailFormItemLayout} style={props.buttonFormStyle?.default}>
            {props.submitbutton && props.submitbutton}
          </Form.Item>
        )}
      </Form>
    );
  }

  return (
    <Form {...props.formProps} {...formItemLayout}>
      <Card
        {...props.cardProps}
        title={props.formProps?.name}
        extra={
          props.submitbuttonPosition === 'in-card-title' && (
            <Form.Item style={{ ...props.buttonFormStyle?.inCardTitle, marginBottom: 0 }}>
              {props.submitbutton && props.submitbutton}
            </Form.Item>
          )
        }
      >
        {props.formfields.map(f => (
          <Form.Item {...f} style={props.itemFormStyle}>
            {f.component}
          </Form.Item>
        ))}
        {(props.submitbuttonPosition === 'default' || !props.submitbuttonPosition) && (
          <Form.Item {...tailFormItemLayout} style={props.buttonFormStyle?.default}>
            {props.submitbutton && props.submitbutton}
          </Form.Item>
        )}
      </Card>
    </Form>
  );
}

export { NewForm as Form, useForm };
