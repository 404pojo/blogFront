import React from 'react';
import { connect } from 'dva';
import sty from './indexPage.less'
import NavList from '../components/navigator/navigatorUl'
import MainSearch from '../components/mainSearch/mainSearch'
import Content from './content/content'
import {
  SearchOutlined 
} from '@ant-design/icons';
function IndexPage() {
  return (
    <div className={sty.index}>
        {/* <div className={sty.imgBox}></div> */}
        <div className={sty.main}>
          <MainSearch/>  
          <Content/>
        </div>
        <div className={sty.head}>
            <div className={sty.headCenter}> 
                <div className={sty.left}>
                  <p>404pojo</p>
                  <div>
                      <NavList/>  
                  </div>
                </div>
                <div style={{position:'relative'}}> 
                  <input type='text' placeholder='搜索'/> 
                  <i><SearchOutlined/></i>
                </div>
                
            </div>
        </div>       
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
