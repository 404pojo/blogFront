import React from 'react'
import styles from './mainSearch.less'
import {
    SearchOutlined 
  } from '@ant-design/icons';
class MainSearch extends React.Component{
    render(){
        return(
            <div className={styles.mainSearch}>
                <h1>404pojo</h1>
                <div style={{position:'relative',width:'570px',margin:'0 auto'}}>  
                  <input type='text' placeholder='搜索'/> 
                  <i><SearchOutlined/></i>
                </div>
            </div>
        )
    }
}
export default MainSearch