import React from 'react';
import './Message.css';

export default function({ text }) {
  return <span className="message">{ text }</span>;
}
