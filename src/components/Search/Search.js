import React from 'react';
import {
  searchPanel,
  previewList,
  input,
  buttonWrapper,
  button
} from './Search.module.css';

import ShowPreview from '../ShowPreview';
// Реализуйте страницу поиска.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле search вашего стейта
// и экшн searchRequest.

const Search = () => {
  return (
    <React.Fragment>
      <div className={previewList}>
        <input className={input} />
        <div className={buttonWrapper}>
          <button className={button}>Загрузить</button>
        </div>
      </div>
      <div className={searchPanel}>
        <ShowPreview
          {...{
            image: 'test',
            name: 'test_name',
            id: '123',
            summary: '<p>Test</p>'
          }}
        />
        <ShowPreview
          {...{
            image: 'test',
            name: 'test_name',
            id: '123',
            summary: '<p>Test</p>'
          }}
        />
        <ShowPreview
          {...{
            image: 'test',
            name: 'test_name',
            id: '123',
            summary: '<p>Test</p>'
          }}
        />
      </div>
    </React.Fragment>
  );
};

export default Search;
