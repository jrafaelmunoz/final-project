import 'antd/dist/antd.css';
import { Card } from 'antd';
import React from "react";
import NumberFormat from 'react-number-format';

function Remaining({remainingBudget, initialBudget}) {
    return (
        <div className="site-card-wrapper">
            <Card title={"Remaining (" + (100 * remainingBudget / initialBudget).toFixed(2) + "%)"} bordered={true} type="inner" headStyle={{ backgroundColor: '#F6FFED', color: 'black' }}>
                <NumberFormat value={remainingBudget.toFixed(2)} 
                    displayType={'text'} 
                    thousandSeparator={true} 
                    prefix={'$'} />
            </Card>
      </div>
    );
}

export default Remaining;
