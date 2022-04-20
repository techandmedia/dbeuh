/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormItemProps, Form, FormProps, Card, CardProps, Row, Col } from 'antd';
import { CSSProperties } from 'react';
import { formItemLayoutDefault, tailFormItemLayoutDefault } from './form-default';

export interface IFormItem extends FormItemProps {
  key: string;
  component: React.ReactNode;
}

export interface IForm {
  formfields: IFormItem[];
  formfields2?: IFormItem[];
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
  const length = props.formfields.length;

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
        {props.type === 'dual-column' ? (
          <Row gutter={24}>
            <Col xs={24} md={12} lg={8} xl={7}>
              {props.formfields.map(f => (
                <Form.Item {...f}>{f.component}</Form.Item>
              ))}
            </Col>
            <Col xs={24} md={12} lg={8} xl={7}>
              {props.formfields2?.map(f => (
                <Form.Item {...f}>{f.component}</Form.Item>
              ))}
            </Col>
          </Row>
        ) : (
          props.formfields.map(f => (
            <Form.Item {...f} style={props.itemFormStyle}>
              {f.component}
            </Form.Item>
          ))
        )}

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
