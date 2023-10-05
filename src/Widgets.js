import React from 'react'
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info"
import { FiberManualRecord } from '@material-ui/icons';

function Widgets() {

    const newsArticle=(heading,subtitle)=>(
        <div className="widgets_article">
            <div className="widgets_articleleft">
                <FiberManualRecord/>

            </div>
            <div className="widgets_articleright">
                <h4>{heading}</h4>
                <p>{subtitle}</p>

            </div>
        </div>
    )
  return (
    <div className='widgets'>
        <div className="widgets_header">
            <h2>LinkedIn News</h2>
            <InfoIcon/>
        </div>
        {newsArticle("No end for development","Top News-990 readers")}
        {newsArticle("AI-Next BIG thing","Top News-700 readers")}
        {newsArticle("BIG DATA","The future")}
        {newsArticle("chat-gpt","Version 4.0")}
        {newsArticle("BARD all set to give tough fight to gpt","Top News-520 readers")}
        {newsArticle("BING shakes hand with gpt","enabled a chat bot option")}
        {newsArticle("Layoffs","hard time for techies")}
    </div>
    
  )
}

export default Widgets
