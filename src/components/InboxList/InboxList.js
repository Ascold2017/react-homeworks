import React from 'react';
import { withData } from '../../context/Data';
import MailList from '../MailList';
// Реализуйте компонент InboxList
// Он должен показывать список входящих писем.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать MailList для отображения данных.

const InboxList = ({ inbox }) => {
  const mails = inbox.map(mail => ({
    id: mail.id,
    body: mail.body,
    to: `/inbox/${mail.id}`
  }));
  return <MailList mails={mails} />;
};

export default withData(InboxList);
