import { useEffect } from 'react';
import { notification } from 'antd';
import { NotificationInstance } from 'antd/es/notification/interface';

export interface INotificationProps {
  response: INotification;
}

interface INotification {
  title?: string;
  message?: string;
  code: number;
}

function openNotification(api: NotificationInstance, response: INotification) {
  api.open({
    message: (
      <span style={{ color: response.code === 500 ? 'orangered' : '#b7eb8f' }}>
        <strong>{response.title}</strong>
      </span>
    ),
    description: (
      <>
        Hubungi Admin untuk bantuan, telah terjadi error:
        <br />
        <strong>{response.message}</strong>
      </>
    ),
  });
}

export function Notification(props: INotificationProps) {
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    if (props?.response?.code === 500) {
      openNotification(api, props?.response);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props?.response]);

  return <div>{contextHolder}</div>;
}
