// components/NewsItem.js
import React from 'react';
// import GenerateArticle from './GenerateComment'
import { useState } from 'react';
import { generateComment } from '../utils/bardAPI';
import moment from 'moment';

const NewsItem = ({ article }) => {
    // const handleGenerateArticle = (a) => {
    //     console.log (GenerateArticle(), '<<<<results>>>>>')
    //     // console.log('<<<a>>>>', a)
    // }
    const [comment, setComment] = useState ()

    const handleGenerateArticle = async () => {
        const input = 'Your input text here'; // Provide your input text
        const generatedComment = await generateComment(input);
        setComment(generatedComment);
      };

  return (
    <div className='news-item'>
      <img className='image-div' src={article.urlToImage}/>
      <h2 className='news-item-title' onClick={handleGenerateArticle}>{article.title}</h2>
      <span>{moment(article.publishedAt).format('MMMM Do YYYY, h:mm A')} </span><a id='article-source' href={article.url}>{article.source.name}</a> <></>
      <p className="news-item-description">{article.description}</p>
      {/* <input className='news-src-button' type='button' value='Go to source' /> */}
      {/* <iframe src={article.url}></iframe> */}
      {/* <embed src='https://news.yahoo.com/switzerland-blocks-sale-leopard-1-113726011.html'/> */}
    </div>
  );
};

export default NewsItem;