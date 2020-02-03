
export default {

  namespace: 'blogData',

  state: {
    BlogInfo: [{
      title: 'App IntelliJ 基本語法',
      date: '2018/3/10 10:50',
      list: ['xx', 'xxx', 'xxx', 'xxxx'],
      content: '123123123123123123</br> 123123123123123123</br> 123123123123123123</br> 123123123123123123</br> 123123123123123123</br> 123123123123123123</br> 123123123123123123</br> 123123123123123123'
    },
    {
      title: 'REACT DVA 之MODEL功能',
      date: '2019/9/8 16:20',
      list: ['xx', 'xxx', 'xxx', 'xxxx'],
      content: '爬得太高</br> 高處不勝寒早知道我就帶件外套</br> 寶座坐得太久椎間盤都有點歪掉</br> Oh there I am again</br> I just win and win and win</br> This goes out to all my exes how u</br> Like me now</br> 一直入圍金音獎好像是我有拜票</br> 小人沒被提名評審是不是有嗑藥</br> Oh there i am again</br> We just win and win and win</br> '
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
