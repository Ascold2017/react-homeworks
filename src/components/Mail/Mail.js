import React from 'react';
import { container } from './Mail.module.css';
import { withData } from '../../context/Data';

const Mail = ({ match, data }) => {
  const mail = data[match.params.type].find(mail => mail.id === match.params.id);
  return (
    <div className={container}>
      {mail.from && (<p className="t-mail-from">From: <b>{mail.from}</b></p>)}
      {mail.to && (<p className="t-mail-to">To: <b>{mail.to}</b></p>)}
      <p className="t-mail-body">{mail.body}</p>
    </div>
  );
};

export default withData(Mail)