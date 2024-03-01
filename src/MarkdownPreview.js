import './preview.css';
import { Remarkable } from 'remarkable';

const md = new Remarkable();

function MarkdownPreview({ markdown }) {
  const renderedHTML = md.render(markdown);
  return (
    <div className='container' id="preview" dangerouslySetInnerHTML={{__html: renderedHTML}} />
  )
}
export default MarkdownPreview;
