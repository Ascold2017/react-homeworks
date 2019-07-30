import React from 'react';
import Message from '../Message';
import './Chat.css';

class Chat extends React.Component {
  state = {
    messages: [],
    messageInput: ''
  };

  changeInputMessage = event => {
    const val = event.target.value
    this.setState({...this.state, messageInput: val})
  }

  sendMessageOnEnter = event => {
    if (event.key === 'Enter') {
      this.setState({ messages: [...this.state.messages, { text: this.state.messageInput }], messageInput: '' })
    }
  }

  render() {
    return (
      <div className="chat">
        <div className="message-list">
          <div className="messages">
            {this.state.messages.map((msg, i) => (<Message text={msg.text} key={i}/>))}
          </div>
        </div>
        <input className="input-message" value={this.state.messageInput} onChange={this.changeInputMessage} onKeyPress={this.sendMessageOnEnter}/>
      </div>
    );
  }
}

export default Chat;
