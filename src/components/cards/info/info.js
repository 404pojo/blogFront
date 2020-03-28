import React from "react"
import { Card } from 'antd';
const { Meta } = Card;

class Info extends React.Component {
    render() { 
        return (
            <Card
            hoverable
            style={{ width: 284 }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Meta title="太平府汤某人" description="不知所云" />
          </Card>
        )
    }
}

export default Info