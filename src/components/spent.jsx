import 'antd/dist/antd.css';
import { Card } from 'antd';
import React from "react";
import NumberFormat from 'react-number-format';

function Spent({spentBudget, initialBudget}) {
    return (
        <div className="site-card-wrapper">
            <Card title={"Spent (" + (100 * spentBudget / initialBudget).toFixed(2) + "%)"} bordered={true} type="inner" headStyle={{ backgroundColor: '#FFF2F0', color: 'black' }}>
                <NumberFormat value={spentBudget.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            </Card>
      </div>
    );
}

export default Spent;
