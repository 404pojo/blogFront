import * as apis from '../services/example'
export default {
    namespace:"test",
    state:{
        name:"tang",
        asyncData:[]
    },
    reducers:{  //相当域vue的mutations       //用户的同步行为数据操作
        changeName(state,payload){
            let _state=JSON.parse(JSON.stringify(state))
            _state.name=payload.data.name;
            return _state
        },
        asyncChangeName(state,payload){
            let _state=JSON.parse(JSON.stringify(state))
            _state.asyncData=payload.data.asyncData;
            return _state
        }
    },
    effects:{//用户的异步行为数据操作 
         //相当域vue的actions，可以有异步方法，最后都会调用reducers的方法
        //同步方法虽然也可以放在里面但不推荐，和vue不同的是，应该直接调用reducer
        *changeNameAsync({payload},{put,call}){
             yield put({
                 type:"changeName",
                 data:{
                     name:"第一个effects"
                 }
             })
        },
        *getAsyncData({payload},{put,call}){
            let res=yield call(apis.getTestData)
            console.log(res)
            if(res.data){
                yield put({
                    type:"asyncChangeName",
                    data:{
                        asyncData:res.data.data
                    }
                })
            }
        }
    },
    subscriptions:{ //浏览器行为（路由跳转等）对数据进行操作
        //对于有些数据需要与其他页面共享，监听是否是其它页面，如果是对数据进行修改，返回其他页面需要的修改后的数据
        //相当于封装的vue中的计算属性，对不同页面提供不同的进一步处理的数据 
        listenTest2Page({dispatch,history}){
            history.listen(({pathname})=>{
                if(pathname=='/Test'){
                    dispatch({
                        type:"changeName",
                        data:{
                            name:"路径监听成功"
                        }
                    })
                }
            })
        }   
    }

}