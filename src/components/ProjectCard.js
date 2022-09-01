import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, UrlLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt=""/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
      <div className='project-link'>
        <a href={UrlLink} target="_blank" rel="noreferrer">{`Link to ${title}`}</a>
      </div>
    </Col>
  );
};
