import React, { useEffect, useState } from 'react';
import { Remarkable } from 'remarkable';
import hljs from 'highlight.js'
import 'highlight.js/styles/tomorrow-night-bright.css';

let md = new Remarkable({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (err) {}
    }
    try {
      return hljs.highlightAuto(str).value;
    } catch (err) {}
    return '';
  }
});

function MarkdownRenderer({ markdown}) {
   const [html, setHtml]  = useState('');

   useEffect(()=>{
      setHtml(md.render(markdown));
 }, [markdown, html])

  return (
    <div className='markdown-renderer' dangerouslySetInnerHTML={{ __html: html }} />
  );
}

export default MarkdownRenderer;