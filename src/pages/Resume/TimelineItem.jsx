const TimelineItem = ({ title, date, description }) => {
  return (
    <li className="timeline-item">
      <h4 className="h4 timeline-item-title">{title}</h4>
      <span>{date}</span>
     { typeof(description) === 'string' ?
      <p className="timeline-text">{description}</p>
     
    : <ol>
      {
        description.map((item)=>{
          return     <li key={item} className="timeline-bullet">
                {item}
          </li>

        })
      }
  
      </ol>
     }
    </li>
  );
}

export default TimelineItem;