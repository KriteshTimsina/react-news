import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import News from './components/News/News'
import Pagination from './components/Pagination/Pagination'
import Search from './components/Search/Search'
import { FiYoutube } from 'react-icons/fi';
import './app.scss';

const App = () => {
  const [text, setText] = useState();
  const [saveText, setSaveText] = useState("react");
  return (
    <>
      <Navbar />
      <Search setText={setText} text={text} setSaveText={setSaveText} />
      <Pagination />
      <News setText={setText} saveText={saveText} text={text} setSaveText={setSaveText} />
      {/* <Footer /> */}
    </>
  )
}
const Footer = () => {
  return (
    <div className="footer">
      <h3>Idea by Thapa Technical</h3>
      <a target="_blank" href="https://www.youtube.com/c/ThapaTechnical">
        <span>Find him on</span>
        <span className='yt-icon'><FiYoutube /></span>
      </a>
    </div>
  )
}
export default App