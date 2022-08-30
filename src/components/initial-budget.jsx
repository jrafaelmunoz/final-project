import 'antd/dist/antd.css';
import { DollarOutlined } from '@ant-design/icons';
import { Card, InputNumber } from 'antd';
import React from "react";



function InitialBudget({updateBudget, initialBudget}) {
    const onChange = (value) => {
        console.log('changed', value);
        updateBudget(value);
    };
    return (
        <div className="site-card-wrapper">
            <Card title="Initial Budget" type="inner" bordered={true} headStyle={{ backgroundColor: '#E6F7FF', color: 'black' }}>
                <InputNumber
                    style={{ width: '100%' }}
                    size="large"
                    prefix={<DollarOutlined />}
                    defaultValue={initialBudget}
                    onChange={onChange}
                />
            </Card>
      </div>
  );
}


export default InitialBudget;
