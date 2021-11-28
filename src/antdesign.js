import React from 'react';
import { Button, DatePicker } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
const AntApp = () => (
    <>
      <Button type="primary">PRESS ME</Button>
      <Button type="primary">PRESS ME</Button>

      <DatePicker placeholder="select date" />
    </>
  );
  export {AntApp}