import React from "react"
import styles from './article.less'
import {Button} from 'antd'
import {
    UserOutlined ,
    HourglassOutlined,  
    HistoryOutlined,
    FolderOpenOutlined ,
    BarsOutlined ,
    ReadOutlined
  } from '@ant-design/icons';
class articlePanel extends React.Component{
    render(){
        return(
            <div className={styles.articlePanel}>
                <h2><span>title</span></h2>
                <ul>
                    <li>
                        <i><UserOutlined/></i>
                        <span>用户名</span>
                    </li>
                    <li>
                        <i>< HistoryOutlined/></i>
                        <span>日期</span>
                    </li>
                    <li>
                        <i><FolderOpenOutlined/></i>
                        <span>文档文件夹</span>
                    </li>
                    <li>
                        <i><BarsOutlined/></i>
                        <span>字数统计</span>
                    </li>
                    <li>
                        <i><HourglassOutlined/></i>
                        <span>阅读时常</span>
                    </li>
                </ul>
                <div
                    // dangerouslySetInnerHTML={{__html:this.state.html}}
                >
                    html内容    
                </div>
                <Button type="primary"><ReadOutlined/>阅读全文</Button>
                <p>
                    #hello
                </p>
            </div>
        )
    }
}
export default articlePanel