import { Button } from 'antd';

// Shared Libraries
import { Form, useForm } from '@wsh4and/antd';

// Local Libraries
import { remapFormItem } from './form-fields';
import FormDescriptionDefault from './form-default-description';
import { formItemLayout, tailFormItemLayout } from './form-layout';

export default function Page(props) {
  const [form] = useForm();
  const formfields = remapFormItem();

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <>
      <FormDescriptionDefault />
      {/* 
      If Layout is vertical, and you want to make button submit as wide as the form item, 
      then add width 100% to the button style, and disable tailFormItemLayout
      Otherwise, remove the width and enable tailFormItemLayout
       */}
      <Form
        formProps={{
          name: 'Sign In Form - VERTICAL',
          form: form,
          layout: 'vertical',
          onFinish: onSubmit,
        }}
        formfields={formfields}
        submitbutton={
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Submit
          </Button>
        }
        formItemLayout={formItemLayout}
      />

      <br />
      <Form
        formProps={{
          name: 'Sign In Form - VERTICAL - IN-CARD-TITLE BUTTON',
          form: form,
          layout: 'vertical',
          onFinish: onSubmit,
        }}
        formfields={formfields}
        submitbuttonPosition="in-card-title"
        submitbutton={
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        }
        formItemLayout={formItemLayout}
      />

      <br />
      <Form
        formProps={{ name: 'Sign In Form - HORIZONTAL/DEFAULT', form: form, onFinish: onSubmit }}
        formfields={formfields}
        submitbutton={
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        }
        formItemLayout={formItemLayout}
        tailFormItemLayout={tailFormItemLayout}
      />

      <br />
      <Form
        formProps={{
          name: 'Sign In Form - HORIZONTAL/DEFAULT - IN-CARD-TITLE BUTTON',
          form: form,
          layout: 'horizontal',
          onFinish: onSubmit,
        }}
        formfields={formfields}
        submitbuttonPosition="in-card-title"
        submitbutton={
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        }
        formItemLayout={formItemLayout}
      />
    </>
  );
}
