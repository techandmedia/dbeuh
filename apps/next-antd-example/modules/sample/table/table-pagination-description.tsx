/* eslint-disable react/no-unescaped-entities */
import { Button, Descriptions, Divider, Typography } from 'antd';
import { useState } from 'react';

const { Link } = Typography;

export default function DescriptionTablePagination(props) {
  const [isHide, setHide] = useState(false);
  const [buttonTitle, setTitle] = useState('Hide');

  return (
    <Descriptions
      title="Table with Custom Pagination"
      bordered
      style={{ marginBottom: 15 }}
      extra={
        <Button
          type="primary"
          onClick={() => {
            setHide(!isHide);
            setTitle(!isHide ? 'Show' : 'Hide');
          }}
        >
          {buttonTitle} Description
        </Button>
      }
    >
      {!isHide && (
        <>
          <Descriptions.Item label="Link" span={3}>
            <Link href="https://ant.design/components/table/" target="_blank">
              Ant Design Table
            </Link>
            <br />
            <Link href="https://ant.design/components/pagination/" target="_blank">
              Ant Design Pagination
            </Link>
          </Descriptions.Item>
          <Descriptions.Item label="Descriptions" span={3}>
            The original Ant Design Table use a simple pagination to provide default function. And
            this function is assumed that we fetched all data from the backend service. Imagine if
            we have millions of data.
            <br />
            But in the real world, that's not how it works, because pagination is integrated heavily
            with the way the data is fetched.
            <br />
            Therefore this custom table component will integrate the data function with pagination.
            <br />
            Surely the default function will only render the content of the table, the table and the
            pagination will still be stateless.
            <br />
          </Descriptions.Item>
          <Descriptions.Item label="Remark" span={3}>
            Refer to the sample code on how to use the table with pagination.
            <Divider style={{ margin: 10 }} />
            99% of the dashboard in a web app use a pagination attached to a table with all the
            necessary function, so this table component is made of that itention. So if you dont
            plan using pagination, just call the table from ant design instead from this library
            instead
            <Divider style={{ margin: 10 }} />
            Custom column function like filter or sort will <strong>ONLY</strong> work for the page
            that displaying the data (current page), since we are getting the data per page
            (pagination).
            <Divider style={{ margin: 10 }} />
            Table data usually do not have row number (1,2,3, and so on).
            <br />
            Adding a function to add row number when user change pages and validate the number so it
            wont be the same in each page (without the function, if the page size is 10, the row
            number will be 1-10 in each page)
          </Descriptions.Item>
        </>
      )}
    </Descriptions>
  );
}
