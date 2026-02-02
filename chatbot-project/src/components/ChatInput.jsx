 import { useState} from 'react'
 import { Chatbot } from 'supersimpledev';
 import './ChatInput.css';
 
 export function ChatInput({ chatMessages, setChatMessages }) {
      const [inputText, setInputText] = useState('');

      function saveInputText(event) {
        setInputText(event.target.value);

      }

      function sendMessage() {
        //console.log(inputText);
        const newChatMessages = [
          ...chatMessages,   //2:10:06 in tutorial
          {
            message: inputText,
            sender: 'user',
            id: crypto.randomUUID()
          }
        ]
        setChatMessages(newChatMessages);

        //external library Chatbot
        const response = Chatbot.getResponse(inputText)
        setChatMessages([
          ...newChatMessages,   //2:10:06 in tutorial
          {
            message: response,
            sender: 'robot',
            id: crypto.randomUUID()
          }
        ]);

        setInputText('');
      }

      return (
        <div className="chat-input-container">
          <input
            className="chat-input"
            placeholder="Send message to chatbot"
            size="30"
            onChange={saveInputText}
            value={inputText}
          />
          <button
            className="send-button"
            onClick={sendMessage}
          >Send</button>
        </div>
      );
    }