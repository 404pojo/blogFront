import React from "react"
import styles from './articleCategory.less'
import { Card } from 'antd'
import {
    PicLeftOutlined
} from '@ant-design/icons'
class articleCategory extends React.Component {
    render() {
        let title = (
            <div>
                <PicLeftOutlined />
                <span>&nbsp;文章列表</span>
            </div>
        )
        return (
           <div className={styles.cardBox}>
                <Card
                size="small"
                title={title}
                extra={<a href="#">More</a>}
                className={styles.card}
                hoverable={true}
            >
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
           </div>
        )
    }
}
export default articleCategory