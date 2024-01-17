
// src/App.js
import React, { useState, useEffect } from 'react';
import {FaUserMd, FaVideo } from 'react-icons/fa';
import { FaCameraRotate } from "react-icons/fa6";
import { BsCameraVideoOffFill } from "react-icons/bs";
import { IoMdMicOff } from "react-icons/io";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  console.log(messages, 'i mss');
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() === '') return;

    setMessages([...messages, { text: inputText, sender: 'User' }]);
    setInputText('');
  };

  useEffect(() => {
    // Simulate Bot response after a short delay
    if (messages.length > 0 && messages[messages.length - 1].sender === 'User') {
      setTimeout(() => {
        setMessages([...messages, { text: 'I am a Bot. Nice to meet you!', sender: 'Bot' }]);
      }, 1000);
    }
  }, [messages]);


  // chat icon
  const Icon = ()=>{
    return(
    <div className='icon'>
    <img src="https://www.fisdom.com/wp-content/uploads/2019/08/ml_gif4.gif" alt="icon" />
    </div>
    )
  };

  return (<>
  <div className="chat-box-head">
    <span className='icone'><FaUserMd /> DOCTOR</span>
        
  </div>
  <div className='consult'>

    
    
    {/* video box */}
    <div  className="chat-box">
      <div className="message-list">
      <div className="video-gif">
        <img src="https://lsdtoolkitgame.com/assets/images/visuals/intro.gif" alt="video-gif" />
      </div>
      </div>
      
      <div className="video-input">
        <button><IoMdMicOff /></button>
        <button><FaCameraRotate /></button>
        <button><FaVideo /> </button>
        <button>< BsCameraVideoOffFill /> </button>
      </div>
     
      
    </div>

    {/* Chat-box */}
    <div  className="chat-box">
      
      <div className="message-list">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender.toLowerCase()}`}>
            <strong>{message.sender}:</strong> {message.text}
          </div>
          
        ))}
        {messages.length?'': <Icon />}
      </div>
      
      <div className="input-container">
        <input
          type="text"
          placeholder="Type a message..."
          value={inputText}
          onChange={handleInputChange}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
      
    </div>
    
    </div>
    </>
  );
};

export default ChatBox;