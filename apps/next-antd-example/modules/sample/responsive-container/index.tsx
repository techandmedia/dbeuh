import { ResponsiveContainer } from '@wsh4and/antd';
import { Divider, Row, Typography } from 'antd';

const { Title } = Typography;
const commonStyle = { border: '2px solid red', borderRadius: 6, padding: 6 };

export default function Page() {
  return (
    <>
      <Row gutter={32} style={{ rowGap: '10px' }}>
        <ResponsiveContainer style={commonStyle}>
          <Title level={5}>Semester Akademik</Title>
        </ResponsiveContainer>
        <ResponsiveContainer style={{ ...commonStyle, border: '2px solid orange' }}>
          <Title level={5}>Tahun Akademik</Title>
        </ResponsiveContainer>
      </Row>
      <Divider />
      <Row gutter={32} style={{ rowGap: '10px' }}>
        <ResponsiveContainer style={commonStyle} colW={{ md: 24 }}>
          <Title level={5}>Semester Akademik</Title>
        </ResponsiveContainer>
        <ResponsiveContainer style={{ ...commonStyle, border: '2px solid orange' }}>
          <Title level={5}>Tahun Akademik</Title>
        </ResponsiveContainer>
      </Row>
    </>
  );
}
