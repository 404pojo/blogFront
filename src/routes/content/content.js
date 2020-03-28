import React from 'react'
import styles from './content.less'
import ArticlePanel from '../../components/article/article'
import Info from '../../components/cards/info/info'
import ArticleCategory from '../../components/cards/info/articleCategory/articleCategory'
import UpIcon from '../../components/upToTop'
import { Pagination } from 'antd';
class Content extends React.Component{
    render(){
        return( 
            <div className={styles.contentBox}> 
                <div className={styles.article}>
                    <ArticlePanel/> 
                    <ArticlePanel/> 
                    <ArticlePanel/> 
                    <ArticlePanel/> 
                    <ArticlePanel/> 
                    <ArticlePanel/> 
                    <Pagination simple defaultCurrent={2} total={50} />
                </div>
                <div className={styles.aside}>
                    <Info/>
                    <ArticleCategory/>
                </div>
                <UpIcon/> 
            </div>
        )
    }
}

export default Content