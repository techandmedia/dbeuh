/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-useless-fragment */
import { CSSProperties, useEffect } from 'react';
import { notification } from 'antd';
import { IDataResponse } from 'libs/utils/src/lib/types';

interface NotificationProps<T> {
  dataResponse: IDataResponse<T>;
  loadingStyle?: CSSProperties;
  successStyle?: CSSProperties;
  errorStyle?: CSSProperties;
}

const key = 'updatable';

export function Notification<T>({
  dataResponse,
  loadingStyle,
  successStyle,
  errorStyle,
}: NotificationProps<T>): JSX.Element {
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    if (dataResponse.isLoading) {
      api.info({
        key,
        message: 'Loading',
        description: dataResponse.message,
        style: loadingStyle,
      });
    }

    if (dataResponse.statusCode === 200) {
      api.success({
        key,
        message: 'Success',
        description: dataResponse.message,
        style: successStyle,
      });
    }

    if (dataResponse.statusCode && dataResponse.statusCode >= 400) {
      api.error({
        key,
        message: 'Error',
        description: dataResponse.message,
        style: errorStyle,
      });
    }
  }, [api, dataResponse]);

  return <>{contextHolder}</>;
}
