import React from 'react';
import { container, link } from './MailList.module.css';
import { Link } from 'react-router-dom';
import { withData } from '../../context/Data';
import classNames from 'classnames';
const MailList = ({ data, match }) => {
  const mails = data[match.params.type].map(mail => ({
    id: mail.id,
    title: mail.body.slice(0, 50) + '...',
    to: `${match.params.type}/${mail.id}`
  }));

  return (
    <ul
      className={classNames(
        container,
        { 't-inbox-list': match.params.type === 'inbox' },
        { 't-outbox-list': match.params.type === 'outbox' }
      )}
    >
      {mails.map(mail => (
        <Link to={mail.to} className={link} key={mail.id}>
          {mail.title}
        </Link>
      ))}
    </ul>
  );
};

export default withData(MailList);
