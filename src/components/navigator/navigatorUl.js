import React from 'react'
import sty from './navigatorUl.less'
import {
    CopyOutlined,
    AppstoreAddOutlined,
    SettingOutlined ,
    PushpinOutlined ,
    MessageOutlined
  } from '@ant-design/icons';
class NavigatorUl extends React.Component {
    
    render() {
        return (
            <ul className={sty.navigatorUl}>
                <li>
                    <CopyOutlined/>
                    <span>文章</span>
                </li>
                <li>
                    <AppstoreAddOutlined/>
                    <span>说说</span>
                </li>
                <li>
                    <SettingOutlined/>
                    <span>标签</span>
                </li>
                <li>
                    <PushpinOutlined/>
                    <span>归档</span>
                </li>
                <li>
                    <MessageOutlined/>
                    <span>留言</span>
                </li>
            </ul>
        )
    }
}
export default NavigatorUl