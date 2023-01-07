import styles from './antd-v5.module.css';

/* eslint-disable-next-line */
export interface AntdV5Props {}

export function AntdV5(props: AntdV5Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AntdV5!</h1>
    </div>
  );
}

export default AntdV5;
