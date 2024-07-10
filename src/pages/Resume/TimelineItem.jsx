const TimelineItem = ({ title, date, description, links }) => {
  return (
    <li className="timeline-item">
      <h4 className="h4 timeline-item-title">{title}</h4>
      <span>{date}</span>

      {typeof description === "string" ? (
        <p className="timeline-text">{description}</p>
      ) : (
        <ol>
          {description.map((item) => {
            return (
              <>
                <li key={item} className="timeline-bullet">
                  {item}
                </li>
              </>
            );
          })}
        </ol>
      )}

      <ol>
        {links?.map((linkData) => {
          return (
            <li key={linkData.title} className="timeline-bullet">
              <a href={linkData.link} target="_blank" className="w-max">
                [{linkData.title}]
              </a>
            </li>
          );
        })}
      </ol>
    </li>
  );
};

export default TimelineItem;
