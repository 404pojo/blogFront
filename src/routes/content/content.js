import React from 'react'
import styles from './content.less'
import ArticlePanel from '../../components/article/article'
class Content extends React.Component{
    render(){
        return(
            <div className={styles.contentBox}>
                <div className={styles.article}>
                    <ArticlePanel/> 
                    <ArticlePanel/> 
                </div>
                <div className={styles.aside}>

                </div>

            </div>
        )
    }
}

export default Content