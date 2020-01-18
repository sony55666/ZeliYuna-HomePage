
export default {

  namespace: 'blogData',

  state: {
    BlogInfo: [{
      title: 'App IntelliJ 基本語法',
      date: '2018/3/10 10:50',
      list: ['xx', 'xxx', 'xxx', 'xxxx'],
      content: '123123123123123123</br> 123123123123123123</br>  123123123123123123</br>'
    },
    {
      title: 'REACT DVA 之MODEL功能',
      date: '2019/9/8 16:20',
      list: ['xx', 'xxx', 'xxx', 'xxxx'],
      content: '123123123123123123'
    },
    {
      title: '電子商務 期中報告',
      date: '2019/10/14 20:21',
      list: ['xx', 'xxx', 'xxx', 'xxxx'],
      content: '123123123123123123'
    },
    ],
  },

  subscriptions: {
    
  },

  effects: {
    *GET_BLOG_INFO({payload}, {call, put}){
      yield put({
        type: 'blogInfoHandle'
      })
    }
  },

  reducers: {
    blogInfoHandle(state, {payload}) {
      return { 
        ...state 
      };
    },
  },

};
