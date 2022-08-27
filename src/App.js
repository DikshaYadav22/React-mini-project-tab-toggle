import React , { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa'
import './App.css';
import axios from 'axios';
import {Button} from 'reactstrap';
import { tab } from '@testing-library/user-event/dist/tab';
const url = 'https://course-api.com/react-tabs-project';


const App = () => {
  const [tabData , setTabData] = useState([]);
  let[newData, setNewData] = useState([]);
  console.log(newData);
  
  const fetchData = async() => 
  {
      await axios.get(url).then((res)=> 
      {
        setTabData(res.data);
      });
  }

  useEffect(()=> {
    fetchData();
  }, []);

  const showTabs = (company) =>
  {
    let newData = [...tabData];
    const filteredTab = tabData.filter((data)=>{
      return data.company === company;
    });

    setNewData(filteredTab);
  }

  return (
    <div className="App">
        <h2 className='text-center'>Experience</h2>
        <div className='tab-container'>
            <div className='sub-container first'>
                <Button onClick={()=>showTabs("TOMMY")}>  TOMMY </Button>
                <Button onClick={()=>showTabs("BIGDROP")}> BIGDROP </Button>
                <Button onClick={()=>showTabs("CUKER")}> CUKER </Button>
                
                  
            </div>
            <div className='sub-container second'>
                {
                  newData.map((data, index)=> {
                    return(
                      <div key={index}>
                          <h4> { data.title } </h4>
                          <Button> {data.company.name} </Button>
                          <span>{ data.dates }</span>
                          
                          <ul>
                         
                          {data.duties.map(item=><li><FaAngleDoubleRight />{item}</li>
                         
                   ) }
                           
                          </ul>
                      </div>
                    )
                  })
                }
            </div>
        </div>
    </div>
  );
}

export default App;
