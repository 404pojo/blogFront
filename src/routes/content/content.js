import React from 'react'
import styles from './content.less'
import ArticlePanel from '../../components/article/article'
import Info from '../../components/cards/info/info'
class Content extends React.Component{
    render(){
        return(
            <div className={styles.contentBox}>
                <div className={styles.article}>
                    <ArticlePanel/> 
                    <ArticlePanel/> 
                </div>
                <div className={styles.aside}>
                    <Info/>
                </div>

            </div>
        )
    }
}

export default Content