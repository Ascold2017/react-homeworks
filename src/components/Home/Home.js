import React from 'react'
import { container } from './Home.module.css'
import classNames from 'classnames'
export default () => <div className={classNames(container, 't-greeting')}>Приветствуем в почтовом клиенте!</div>