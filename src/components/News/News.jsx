import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import NewsView from './NewsView';
import './News.scss';
import './LoadingAnimation.scss'



const News = ({ saveText, text, setText, setSaveText }) => {


  let API = `http://hn.algolia.com/api/v1/search?query=${saveText}`;

  const [isLoading, setIsLoading] = useState(true);
  const [apiData, setApiData] = useState();

  useEffect(() => {
    fetchApiData(API);
  }, [saveText])


  const fetchApiData = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      const { hits } = data; //array destructuring
      setApiData(hits);
      console.log(hits);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }

  if (isLoading) {
    return (
      <div className="clock-loader"></div>
    )
  }



  return (
    <div className='news-container'>
      <NewsView data={apiData} saveText={saveText} text={text} setText={setText} setSaveText={setSaveText} />

    </div>
  )
}

export default News