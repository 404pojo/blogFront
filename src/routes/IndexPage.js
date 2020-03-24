import React from 'react';
import { connect } from 'dva';
import sty from './indexPage.less'
import NavList from '../components/navigator/navigatorUl'

function IndexPage() {
  return (
    <div className={sty.index}>
        <div className={sty.imgBox}></div>
        <div className={sty.main}>
          fsfsf<br/>
          fsfsf<br/>
          fsfsf<br/>
          fsfsf<br/>
          fsfsf<br/>
          fsfsf<br/>
          fsfsf<br/>
          fsfsf<br/>
          fsfsf<br/>
          fsfsf<br/>
          fsfsf<br/>
          fsfsf<br/>
          fsfsf<br/>
          fsfsf<br/>
          fsfsf<br/>
          fsfsf<br/>
          fsfsf<br/>
          fsfsf<br/>
          fsfsf<br/>
          fsfsf<br/>
          fsfsf<br/>
          fsfsf<br/>
          fsfsf<br/>
          fsfsf<br/>
          fsfsf<br/>
          fsfsf<br/>
          fsfsf<br/>
          fsfsf<br/>
          fsfsf<br/>
          fsfsf<br/>
          fsfsf<br/>
          fsfsf<br/>
          fsfsf<br/>
          fsfsf<br/>
          fsfsf<br/>
          fsfsf<br/>
          fsfsf<br/>
          fsfsf<br/>
          fsfsf<br/>
          fsfsf<br/>
          fsfsf<br/>
          fsfsf<br/>
          fsfsf<br/>
          fsfsf<br/>
          fsfsf<br/>
          fsfsf<br/>
          fsfsf<br/>
          fsfsf<br/>
          fsfsf<br/>
          fsfsf<br/>
          fsfsf<br/>
          fsfsf<br/>
          fsfsf<br/>
          fsfsf<br/>
          fsfsf<br/>
          fsfsf<br/>
          fsfsf<br/>
          fsfsf<br/>
          fsfsf<br/>
          fsfsf<br/>
          fsfsf<br/>
          fsfsf<br/>
          fsfsf<br/>
          fsfsf<br/>
        </div>
        <div className={sty.head}>
            <div className={sty.headCenter}>
                <div className={sty.left}>
                  <p>404pojo</p>
                  <div>
                      <NavList/>
                  </div>
                </div>
                <div className={sty.reght}></div>
            </div>
        </div>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
