import 'antd/dist/antd.css';
import { Col, Row } from 'antd';
import React, { useState, useEffect } from "react";
import InitialBudget from '../components/initial-budget';
import Remaining from '../components/remaining';
import Spent from '../components/spent';
import NewSpent from '../components/new-spent';
import Resume from '../components/resume';

function Budget() {
    const [categoryList, setCategoryList] = useState([
        {
            name: 'Food',
            spent: 0,
        },
        {
            name: 'Transport',
            spent: 0,
        },
        {
            name: 'Gas',
            spent: 0,
        },
        {
            name: 'Healt',
            spent: 0,
        }
    ])
    const [spentList, setSpentList] = useState([]);
    const [initialBudget, setBudget] = useState(15000);
    const [remainingBudget, setRemaining] = useState(15000);
    const [spentBudget, setSpent] = useState(0);
    const [totalLabel, setTotalLabel] = useState(0);

    const [total, setTotal] = useState(0);
    useEffect(() => {
      document.title = `Total Items: ${total}`;
      setTotalLabel(`Total: ${total}`)
    });

    const updateBudget = (value) => {        
        setBudget(value);
        setRemaining(value-spentBudget);
    }
    const addSpent = (value, name, category) => {
        setTotal(total+1);
        setSpent(spentBudget + Number(value));
        setRemaining(remainingBudget - Number(value));

        setSpentList(oldArray => [...oldArray, {
            value: value,
            name: name,
            category: category
        }]);
        for (var i=0 ; i < categoryList.length ; i++)
        {
            if (categoryList[i].name === category) {
                categoryList[i].spent = Number(categoryList[i].spent) + Number(value);
                setCategoryList(categoryList);
            }
        }
    }
    return (
      <div>
        <Row>
            <Col span={20} offset={2}>
            <Row gutter={16}>
                <Col span={14} offset={6}><h1>Expense Tracker</h1></Col>                
                <Col span={4}><h2>{totalLabel}</h2></Col>
            </Row>
            <Row gutter={16}>
                <Col span={6}>
                    <Row>
                        <Col span={24}>
                            <InitialBudget updateBudget={updateBudget} initialBudget={initialBudget} />
                        </Col>                    
                    </Row>
                    <br />
                    <Row>
                        <Col span={24}>
                            <Remaining remainingBudget={remainingBudget} initialBudget={initialBudget} />
                        </Col>  
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Spent spentBudget={spentBudget} initialBudget={initialBudget} />
                        </Col>                    
                    </Row>
                    <br />
                    <Row gutter={16}>
                        <Col span={24}>
                            <NewSpent addSpent={addSpent} categoryList={categoryList} totalLabel={totalLabel}/>
                        </Col>            
                    </Row>
                </Col>
                <Col span={18}>
                    <Resume spentList={spentList} categoryList={categoryList} />
                </Col>
            </Row>
            </Col>
        </Row>        
      </div>
  );
}

export default Budget;
