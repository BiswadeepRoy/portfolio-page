import "./App.css";

function Card({ organization, period, title, information, link }) {
  return (
    <article className="Card">
      <div className="tabs">
        <div className="org">{organization}</div>
        {period && <div className="period">{period}</div>}
      </div>
      <div className="title">
        <div className="title-content">{title}</div>
      </div>
      <div className="main-info">
        <div className="main-content">
          {information &&
            information.map((statement) => (
              <>
                {statement}
                <br></br>
              </>
            ))}
        </div>
      </div>
      <div className="link">
        <div className="link-content">
          <i class="fa fa-map-marker"></i>
          {link}
        </div>
      </div>
    </article>
  );
}

export function CertificateCard({ organization, period, title, link }) {
  return (
    <article className="CCard">
      <div className="tabs">
        <div className="org">{organization}</div>
      </div>
      <div className="title">
        <div className="title-content">{period}</div>
      </div>
      <div className="main-info">
        <div className="main-content">{title}</div>
      </div>
      {link && (
        <div className="link">
          <div className="link-content">
            <a href={link} target="_blank">
              <i class="fa fa-eye"></i> View
            </a>
          </div>
        </div>
      )}
    </article>
  );
}

export function ProjectCard({ organization, technology, icon, link }) {
  return (
    <article className="PCard">
      <div className="tabs">
        <div className="org">{organization}</div>
      </div>
      <div className="title">
        <div className="title-content">{technology}</div>
      </div>
      <div className="main-info">
        <div className="main-content">{icon}</div>
      </div>
      <div className="link">
        <div className="link-content">
          <a href={link} target="_blank">
            <i class="fa fa-external-link-square"></i> Visit
          </a>
        </div>
      </div>
    </article>
  );
}

export default Card;
