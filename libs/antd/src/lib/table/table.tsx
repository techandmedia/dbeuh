/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table, TableProps } from 'antd';

export interface ITable extends TableProps<any> {
  // define the width of the table
  scrollx?: number;

  /**
   * define the height of the table - define smaller to make it scrollable
   * define null / undefined to make it show the whole content of table
   */
  scrolly?: number;

  /**
   * Pagination Config
   */
  totalContent?: number;
}

function NewTable(props: ITable) {
  // provide default value to prevent NAN
  function reducer(accumulator = 0, currentValue = 0) {
    return accumulator + currentValue;
  }

  /**
   * please dont change this to a one liner
   * it doesnt make it look cool and it doesnt make you smarter
   */
  const tableWidth = props?.columns
    ?.map((column: any) => {
      if (column.children) {
        return column.children.map((col: any) => col.width).reduce(reducer, 0);
      }

      return column.width;
    })
    .reduce(reducer, 0);

  return (
    <Table
      {...props}
      scroll={{
        y: props.scrolly,
        x: props.scrollx ? props.scrollx : `calc(${tableWidth}px + 50%)`,
      }}
      pagination={{
        ...props.pagination,
        showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
      }}
    />
  );
}

export { NewTable as Table };
