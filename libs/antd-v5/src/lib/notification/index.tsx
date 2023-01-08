import { useEffect } from 'react';
import { notification } from 'antd';
import { NotificationInstance } from 'antd/es/notification/interface';

export interface INotificationProps {
  data: INotification;
}

interface INotification {
  title?: string;
  message?: string;
  code: number;
}

function openNotification(api: NotificationInstance, data: INotification) {
  api.open({
    message: (
      <span style={{ color: data.code === 500 ? 'orangered' : '#b7eb8f' }}>
        <strong>{data.title}</strong>
      </span>
    ),
    description: (
      <>
        Hubungi Admin untuk bantuan, telah terjadi error:
        <br />
        <strong>{data.message}</strong>
      </>
    ),
  });
}

export function Notification(props: INotificationProps) {
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    if (props?.data?.code === 500) {
      openNotification(api, props?.data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props?.data?.code]);

  return <div>{contextHolder}</div>;
}
