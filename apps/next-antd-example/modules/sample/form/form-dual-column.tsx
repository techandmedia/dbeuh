import { Button } from 'antd';

// Shared Libraries
import { Form, useForm } from '@wsh4and/antd';

// Local Libraries
import { remapDualFormItem } from './form-fields';
import { formItemLayoutDualColumns } from './form-layout';
import FormDescriptionDual from './form-dual-description';

export default function Page(props) {
  const [form] = useForm();
  const formfieldsDual = remapDualFormItem();

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <>
      <FormDescriptionDual />
      <Form
        formProps={{
          name: 'Sign In Form - VERTICAL/TWO COLUMNS - IN-CARD-TITLE BUTTON',
          form: form,
          layout: 'vertical',
          onFinish: onSubmit,
        }}
        formfields={formfieldsDual.formfields}
        formfields2={formfieldsDual.formfields2}
        type="dual-column"
        submitbuttonPosition="in-card-title"
        submitbutton={
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        }
        formItemLayout={formItemLayoutDualColumns}
      />
    </>
  );
}
