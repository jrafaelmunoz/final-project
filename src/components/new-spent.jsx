import 'antd/dist/antd.css';
import { PlusOutlined, DollarOutlined, SearchOutlined, Loading3QuartersOutlined } from '@ant-design/icons';
import { Card, Input, InputNumber, Select, Button } from 'antd';
import React, {useState} from "react";

function refreshPage() {
  window.location.reload(false);
}


function NewSpent({addSpent, categoryList, totalLabel}){
  const [categorySelected, setCategory] = useState("");
  const addNewSpent = () => {
    if(document.getElementById('spentName').value === ""){
      alert('Please enter a description');
      return;
    }    
    if(document.getElementById('spentValue').value === "" || isNaN(document.getElementById('spentValue').value)){
      alert('Please enter a correct value');
      return;
    }
    if(categorySelected === ""){
      alert('Please enter a category');
      return;
    }
    addSpent(document.getElementById('spentValue').value, 
             document.getElementById('spentName').value, 
             categorySelected)
  }
  const { Option } = Select;

  const handleChange = (value) => {
    setCategory(value);
  };
    return (
        <div className="site-card-wrapper">
            <Card title="New Spent" bordered={true} type="inner" headStyle={{ backgroundColor: '#E6F7FF', color: 'black' }}>
            <Input id='spentName' size="large" placeholder="Description" prefix={<PlusOutlined />} />
            <br />
            <InputNumber
                id='spentValue'
                placeholder='Value'
                style={{ width: '100%' }}
                size="large"
                prefix={<DollarOutlined />}
            />
            <br />
            <Select
                id='spentCategory'
                style={{ width: '100%' }}
                size="large" prefix={<SearchOutlined />}
                defaultValue=""
                onChange={handleChange}>
                  <Option value="" disabled>-- Select Category --</Option>
                  {categoryList.map((spList) => (
                    <Option key={spList.name} value={spList.name}>{spList.name}</Option>
                  ))}
            </Select>
            <br/><br/>
            <Button 
              onClick={addNewSpent}
              type="primary" 
              icon={<PlusOutlined />} 
              size={'large'}>
              Add Spent
            </Button>
            {" "}
            <Button 
              onClick={refreshPage}
              type="secondary" 
              icon={<Loading3QuartersOutlined />} 
              size={'large'}>Reload!!!</Button>
            </Card>            
      </div>
    );
}

export default NewSpent;
