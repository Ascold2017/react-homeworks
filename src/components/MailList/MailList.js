import React from 'react';
import { container, link } from './MailList.module.css';
import { Link } from 'react-router-dom';
const MailList = ({ mails }) => {
  return (
    <ul className={container}>
      {mails.map(mail => (
        <Link to={mail.to} className={link}>
          {mail.body}
        </Link>
      ))}
    </ul>
  );
};

export default MailList;
