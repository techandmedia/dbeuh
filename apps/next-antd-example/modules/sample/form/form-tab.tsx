import { CSSProperties } from 'react';
import { Button, Col, Row, Tabs } from 'antd';
import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';

// Shared Libraries
import { Form, useForm } from '@wsh4and/antd';

// Local Libraries
import { remapFormItem } from './form-fields';
import FormDescriptionTab from './form-tab-description';

const borderColor = 'var(--ant-primary-1)';

const formItemLayout = {
  wrapperCol: {
    xs: { span: 24 },
  },
};

const { TabPane } = Tabs;

const width = '135%';

const inputStyle: CSSProperties = {
  width: width,
  maxWidth: '678px',
  float: 'left',
  clear: 'both',
  padding: '15px 20px',
  // fontSize: '30px',
};

const itemFormStyle: CSSProperties = { margin: '20px 0px', width: '100%' };

// Styling Form Item for Button
const buttonFormStyle: CSSProperties = {
  margin: '0px 0px',
};

// Styling Button
const buttonStyle: CSSProperties = {
  width: width,
  fontSize: 16,
  padding: '10px 16px 36px 16px',
  border: '2px solid var(--ant-primary-7)',
  borderRadius: 4,
};

const tabStyle: CSSProperties = {
  padding: '20px 30px 10px 25px',
};

const tabPaneStyle: CSSProperties = {
  padding: '0px 70px 0px 0px',
};

const tabTitleStyle: CSSProperties = { padding: '0px 20px' };

export default function Page(props) {
  const [form] = useForm();
  const formfields = remapFormItem(null, inputStyle);

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <>
      <FormDescriptionTab />
      <Row justify="space-around" align="middle">
        <Row
          justify="space-around"
          align="middle"
          style={{
            border: `2px solid ${borderColor}`,
            borderRadius: 4,
            maxWidth: 370,
          }}
        >
          <Col>
            <Row justify="space-around" align="middle" style={{ height: '80px' }}>
              <h1>Put logo here</h1>
            </Row>
            <Tabs defaultActiveKey="2" type="card" style={tabStyle}>
              <TabPane
                tab={
                  <span style={tabTitleStyle}>
                    <AppleOutlined />
                    Sign In
                  </span>
                }
                style={tabPaneStyle}
                key="1"
              >
                <Form
                  formProps={{
                    name: 'Sign In',
                    form: form,
                    layout: 'vertical',
                    onFinish: onSubmit,
                  }}
                  noCard
                  formfields={formfields}
                  submitbutton={
                    <Button type="primary" htmlType="submit" style={buttonStyle}>
                      Submit
                    </Button>
                  }
                  formItemLayout={formItemLayout}
                  itemFormStyle={itemFormStyle}
                  buttonFormStyle={{
                    default: buttonFormStyle,
                  }}
                />
              </TabPane>
              <TabPane
                tab={
                  <span style={tabTitleStyle}>
                    <AndroidOutlined />
                    Sign Up
                  </span>
                }
                key="2"
                style={tabPaneStyle}
              >
                <Form
                  formProps={{
                    name: 'Sign Up',
                    form: form,
                    layout: 'vertical',
                    onFinish: onSubmit,
                  }}
                  noCard
                  formfields={formfields}
                  submitbutton={
                    <Button type="primary" htmlType="submit" style={buttonStyle}>
                      Submit
                    </Button>
                  }
                  formItemLayout={formItemLayout}
                  itemFormStyle={itemFormStyle}
                  buttonFormStyle={{
                    default: buttonFormStyle,
                  }}
                />
              </TabPane>
            </Tabs>

            <Row justify="space-around" align="middle" style={{ height: '40px' }}>
              <Button type="link">Reset Password</Button>
            </Row>
          </Col>
        </Row>
      </Row>
    </>
  );
}
