import React from 'react';
import Message from '../Message';
import './Chat.css';

class Chat extends React.Component {
  state = {
    messages: [],
    messageInput: ''
  };

  scrollToBottom() {
    const scrollHeight = this.refs.messageList.scrollHeight;
    const height = this.refs.messageList.clientHeight;
    const maxScrollTop = scrollHeight - height;
    this.refs.messageList.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
  }

  changeInputMessage = event => {
    this.setState({ messageInput: event.target.value });
  };

  sendMessageOnEnter = event => {
    if (event.key === 'Enter') {
      this.state.messageInput &&
        this.setState(
          {
            messages: [
              ...this.state.messages,
              { text: this.state.messageInput }
            ],
            messageInput: ''
          },
          () => this.scrollToBottom()
        );
    }
  };

  render() {
    return (
      <div className="chat">
        <div className="message-list" ref="messageList">
          <div className="messages">
            {this.state.messages.map((msg, i) => (
              <Message text={msg.text} key={i} />
            ))}
          </div>
        </div>
        <input
          className="input-message"
          value={this.state.messageInput}
          onChange={this.changeInputMessage}
          onKeyPress={this.sendMessageOnEnter}
        />
      </div>
    );
  }
}

export default Chat;
