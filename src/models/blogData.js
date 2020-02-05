
export default {

  namespace: 'blogData',

  state: {
    BlogInfo: [{
      title: 'App IntelliJ 基本語法',
      date: '2018/3/10 10:50',
      list: ['xx', 'xxx', 'xxx', 'xxxx'],
      content: 
      `安裝java SE</br> 
      <a>http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html</a></br> 
      </br> 
      安裝IntelliJ</br> 
      <a>https://www.jetbrains.com/idea/download/#section=windows</a></br> 
      勾選 JAVA KIT 64X</br> 
      </br> 
      1.常數(val)變數(var)</br> 
      常數能賦予值 之後則不能改變</br> 
      val x = 2</br> 
      x=1 //error</br> 
      變數則可以重複給予新值</br> 
      var x = 1</br> 
      x= 878787</br> 
      </br> 
      2.註解</br> 
      跟.net一樣</br> 
      ctrl+/</br> 
      shift+ctrl+/ //???黑人問號???</br> 
      </br> 
      3.整數浮點數</br> 
      var x:Int = 1 //大小寫</br> 
      println(x) --> 1</br> 
      var y:Float = 1F</br> 
      println(y) --> 1.0</br> 
      </br> 
      4.整數表示範圍</br> 
      println(Int.MAX_VALUE) -->2147483647</br> 
      println(Int.MIN_VALUE) -->-2147483647</br> 
      </br> 
      5.資料轉換</br> 
      toString()</br> 
      toLong()</br> 
      toShort()</br> 
      </br> 
      6.多項條件控制</br> 
      when(x){</br> 
      1 -> println(x)</br> 
      2 -> {</br> 
      println(x)</br> 
      }</br> 
      else ->{</br> 
      println(“non”)</br> 
      }</br> 
      }</br> 
      </br> 
      7.集合資料型態</br> 
      val list:ArrayList<String> = ArrayList()</br> 
      </br> 
      list.add("A1")</br> 
      list.add("A2")</br> 
      list.add("A3")</br> 
      list.add("A4")</br> 
      </br> 
      for(i in 0 until list.size){     //until類似小於</br> 
          println(list[i])</br> 
      }</br> </br> 
      for(title in list){ </br> 
          println(title)</br> 
      }</br> 
      假如要+2的話</br> 
      for(i in 1. .10 step 2){</br> 
      println(i)</br> 
      }</br> </br> 
      
      2018/07/19 App IntelliJ</br> 
      function定義</br> 
      fun add(){</br> 
      val x= 1;</br> 
      }</br> 
      </br> 
      fun main(args: Array<String>){</br> 
          add();</br> 
      }</br> 
      </br> 
      2018/07/26 App IntelliJ</br> 
      class Account {</br> 
      var name:String =""</br> 
      init{</br> 
      println(“初始化，第一層”)</br> 
      }</br> 
      </br> 
      constructor(){</br> 
          println("初始化，第二層")</br> 
      }</br> 
      }</br> `
    },
    {
      title: 'REACT DVA 之MODEL功能',
      date: '2019/9/8 16:20',
      list: ['xx', 'xxx', 'xxx', 'xxxx'],
      content: `
      <h2>總體分布</h2>
      基本上 MODEL是一個將component及route帶過來的數據整理跟連接到service串接api到後端</br> 
      </br> 
      <h3>namespace</h3>
      是這個model的命名，當在請求dispath時呼叫model所用到的名稱</br> 
      </br> 
      <h3>state</h3>
      reducer裡面的初始狀態</br> 
      </br> 
      <h3>subscriptions</h3>
      表示訂閱數據源</br> 
      </br> 
      <h3>effects</h3>
      處理非同步的 action 邏輯，這裡常用來呼叫api時會使用到yield</br> 
      </br> 
      <h3>reducers</h3>
      處理同步的 action 邏輯，也有儲存的資料到state的功能</br>`
    },
    {
      title: '電子商務 期中報告',
      date: '2019/10/14 20:21',
      list: ['xx', 'xxx', 'xxx', 'xxxx'],
      content: `
      <h3>一、前言</h3> 
      肌肉萎縮最容易發生於受傷或大病過後</br> 因久臥於床而沒活動身體</br> 造成廢用性肌肉萎縮， 所以醫生在患者原先的疾病復原後</br> 過沒多久便會要求患者進行復健。</br> 在復健初期，常會因需花費更大的力氣及意志力才能達到生病前的活動狀態</br> 使患者對於復健過程產生挫敗感。除此之外復健運動常位於醫院復健室</br> 對於許多患者來說，復健時周遭不變的環境及重複地動作</br> 使得治療過程相當單調乏味</br> 導致復健的意願及效果下滑。</br> 
      </br> 
      <h3>二、創意描述</h3>
      傳統復健運動進行時，會有治療師協助患者進行運動，經各項量測來了解患者狀況</br> 然而因科技的進步，本研究擬發展將肌肉信號感測器(EMG Sensor)與行動載具應用程式(Application,APP)結合，讓患者不必侷限於空間及時間，皆可進行復健</br> 大幅減少傳統復健空間及時間的不便性。</br> 並且在肌電訊號傳至系統的同時，藉由客觀的訊號來判斷患者藉由復健之肌肉恢復情形與疲勞程度，避免患者欲速則不達而造成二次傷害。</br> 
      復健完成之後即時檢測查看結果，即時了解當下復健的狀態</br> 患者能針對自己當下的復健成效做進一步的調整。</br> 透過肌電圖呈現肌肉狀態的技術結合訊號過濾、頻譜分析，建立行動肌電復健檢測系統</br> 讓患者在自行復健當下，也能了解自身的復健狀態</br> 並且有了視覺化的數據讓原本枯燥乏味的復建過程中給予使用者看到實際數據進而產生自信並增加成就感。</br> 
      </br> 
      <h3>三、系統功能簡介</h3>
      使用者(患者)透過連接Seeed Studio Grove - EMG Detector肌電圖檢測儀感測器傳送肌電參數至雲端資料庫</br> 透過雲端運算計算肌電參數及分析並回傳其數據至設備，能夠透過Web裝置與行動裝置即時的查看使用者的復健狀況，以下是本系統的功能：</br> 
      </br> 
      <h4>1.會員功能</h4>
      使用者註冊成為本系統的會員後，我們將提供更多的服務</br> 例如：參數的量測、圖表化的肌電分析等，除此之外會員也會擁有更改會員資料、大頭貼、密碼、忘記密碼等基本功能。</br> 
      </br> 
      <h4>2.生理參數量測功能</h4>
      主要透過肌肉信號感測器擷取使用者的肌電參數值，並利用肌電圖濾波</br> 針對個人化的肌電特徵資訊進行分析、轉換與處理，降低量測過程產生誤差的可能性，保留完整的生理資訊。</br> 
      </br> 
      <h4>3.圖表化功能</h4>
      將分析完的數據利用圖表的方式，顯示在Web以及行動裝置上，讓使用者能清楚明瞭自身的復健狀況。</br> 主要分成個人化圖表與大眾統計圖表：</br> 
      (1) 個人化圖表顯示使用者(患者)單筆或多筆的肌電資訊，並提供醫師(治療師)對於使用者(患者)復健的參考依據。</br> 
      (2) 大眾統計圖表顯示已驗證會員年齡與檢測部位的統計，分析使用者所分布的年齡層與最多復健部位。</br> 
      </br> 
      <h4>4.個人化復健推薦功能</h4>
      將推薦的復健動作為基準，系統先將資料送至雲端進行分析，推薦復健的姿勢。</br> 可減少使用者往返醫院的時間，並能增加其復健之意願。</br> 
      </br> 
      <h4>5.雲端資料庫功能</h4>
      儲存使用者基本資料與分析完的數據，即時傳遞給醫師</br> 讓患者在不前往復健室的情況下利用數據雲端化，也能使醫院能夠隨時捕捉使用者的當前狀態。</br> `
      
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
