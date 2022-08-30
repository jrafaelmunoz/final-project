import 'antd/dist/antd.css';
import { Card, Row, Col } from 'antd';
import React from "react";
import NumberFormat from 'react-number-format';

function Resume({spentList, categoryList}) {

    const RenderTotal = ({value}) => {
        return (<Row>
            <Col span={18}>
                <b>Total</b>
            </Col>
            <Col span={6} style={{display: 'flex', justifyContent: 'flex-end'}}>
                <b><NumberFormat value={value.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></b>
            </Col>
        </Row>);
    }

    const RenderList = (value) => {
        if (value.list.category === value.catToList) {
            return (<Row>
                        <Col span={18}>
                            {value.list.name}
                        </Col>
                        <Col span={6} style={{display: 'flex', justifyContent: 'flex-end'}}>
                            <NumberFormat value={(Number(value.list.value)).toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                        </Col>
                    </Row>);
        }
      };

    const RenderCategory = ({category, catIndex}) => {
        return (<Col span={6}>
            <Card title={category} bordered={true} type="inner" headStyle={{ backgroundColor: '#FFFBE6', color: 'black' }}>                        
                {spentList.map((list, index) => (
                    <RenderList key={index} list={list} catToList={category}/>                        
                ))}
                <hr />
                <RenderTotal value={categoryList[catIndex].spent} />
            </Card>
        </Col>);
    }
    return (
        <div className="site-card-wrapper">
            <Row>
                {
                   categoryList.map((cList, index) => (
                    <RenderCategory category={cList.name} catIndex={index}/>                        
                )) 
                }
            </Row>
      </div>
  );
}


export default Resume;
