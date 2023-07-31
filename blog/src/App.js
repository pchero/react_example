import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {

  let posts = "강남 고기 맛집"

  let[contentTitle, contentTitleChange] = useState(['kamailio', 'rtpengine', 'asterisk'])

  let[like, likeChange] = useState(0);

  // let [a, b] = useState(['남자 코트 추천', 'rkd']);

  function buttonClick() {
    var titles = [...contentTitle];
    titles[0] = 'freeswitch';
    contentTitleChange(titles);
  }


  return (
    <div className="App">
      <div className='black-nav'>
        <div>개발 Blog</div>
      </div>

      <button onClick={ buttonClick }>button</button>

      <div className='list'>
        <h3>{contentTitle[0]} <span onClick={() => { likeChange(like + 1)}}>👍</span> {like}</h3>
        <p>2/17 published</p>
        <hr/>
      </div>
      <div className='list'>
        <h3>{ contentTitle[1]} </h3>
        <p>2/18 published</p>
        <hr/>
      </div>
      <div className='list'>
        <h3>{ contentTitle[2]} </h3>
        <p>2/19 published</p>
        <hr/>
      </div>


      {/* <div className='modal'>
        <h2>Title</h2>
        <p>Date</p>
        <p>Detail</p>
      </div> */}

      <Modal></Modal>
    </div>
  );
}

function Modal() {
  return (
    <div className='modal'>
      <h2>Title</h2>
      <p>Date</p>
      <p>Detail</p>
    </div>
  )
}

export default App;
