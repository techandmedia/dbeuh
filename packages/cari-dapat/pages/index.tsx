import { ISupabase, usePostSupabase } from '@beuh/utils';
import { Notification, Table } from '@wsh4and/antd';
import { Button, Divider, Dropdown, Space, TableColumnsType, Tabs } from 'antd';
import { DownOutlined, SearchOutlined } from '@ant-design/icons';
import { useEffect } from 'react';

import type { MenuProps } from 'antd';
import SearchForm from '../components/search-form';

const PARAMS: ISupabase = {
  // Schema public sudah default, tidak perlu define
  table: 'category',
  select: '*',
  // select: 'item_code, item_name',
  page: 1,
  size: 5,
};

const PARAMS2: ISupabase = {
  schema: 'ksk',
  table: 'v_cart', // getting data from a 'view' table
  select: '*',
  page: 1,
  size: 10,
};

export function remapColumns(): TableColumnsType {
  const columns: TableColumnsType = [
    {
      title: 'No',
      dataIndex: 'key',
      width: 40,
      fixed: 'left',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      width: 100,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      width: 100,
    },
  ];

  return columns;
}
const items: MenuProps['items'] = [
  {
    key: 'jakarta',
    label: 'Jakarta',
  },
];
export default function Page() {
  const columns = remapColumns();
  const [category, pagination, getCategory] = usePostSupabase(PARAMS);

  useEffect(() => {
    console.log(category);
  }, [category]);

  return (
    <>
      <section className="search-section">
        <div className="hero">
          Temukan yang kamu butuhkan di{' '}
          {items.length > 1 ? (
            <Dropdown menu={{ items }} trigger={['click']}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <div className="location">Jakarta</div>
                  <DownOutlined className="caret-down" />
                </Space>
              </a>
            </Dropdown>
          ) : (
            <Space>
              <div className="location">Jakarta</div>
            </Space>
          )}
        </div>
        <SearchForm
          {...{ categories: null, onFinish: null, onFinishFailed: null }}
        />
      </section>
      <Notification response={category} />
      <Tabs
        tabPosition="left"
        style={{ padding: '0 50px' }}
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: `Category ${id}`,
            key: id,
            children:
              i === 1 ? (
                <>
                  <Space wrap>
                    <Button
                      type="default"
                      onClick={() => {
                        getCategory({
                          ...PARAMS,
                          data: { ...PARAMS.data, page: 1 },
                        });
                      }}
                    >
                      Refresh Data at 1st page
                    </Button>
                    <Button
                      type="primary"
                      onClick={() =>
                        getCategory({
                          ...PARAMS,
                          data: { ...PARAMS.data, page: pagination.current },
                        })
                      }
                    >
                      Refresh Data at current page
                    </Button>
                  </Space>
                  <br />
                  <Divider
                    type="horizontal"
                    style={{ color: 'orange', fontSize: 10 }}
                  />
                  <Table
                    columns={columns}
                    dataSource={category.data}
                    bordered
                    // scrolly={200}
                    scrollx={300}
                    loading={category.loading}
                    pagination={pagination}
                    rowKey="key"
                  />
                </>
              ) : (
                <>
                  <Space wrap>
                    <Button
                      type="default"
                      onClick={() => {
                        getCategory({
                          ...PARAMS2,
                          data: { ...PARAMS2.data, page: 1 },
                        });
                      }}
                    >
                      Refresh Data at 1st page
                    </Button>
                    <Button
                      type="primary"
                      onClick={() =>
                        getCategory({
                          ...PARAMS2,
                          data: { ...PARAMS2.data, page: pagination.current },
                        })
                      }
                    >
                      Refresh Data at current page
                    </Button>
                  </Space>
                  <br />
                  <Table
                    columns={columns}
                    dataSource={category.data}
                    bordered
                    // scrolly={200}
                    scrollx={300}
                    loading={category.loading}
                    pagination={pagination}
                    rowKey="key"
                  />
                </>
              ),
          };
        })}
      />
    </>
  );
}
