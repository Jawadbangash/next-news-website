// components/NewsItem.js
import React from 'react';
// import GenerateArticle from './GenerateComment'
import { useState } from 'react';
import { generateComment } from '../utils/bardAPI';


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
      <p className="news-item-description">{article.description}</p>
    </div>
  );
};

export default NewsItem;