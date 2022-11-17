
import React from 'react';
export default function PortraitTile({ data }: any) {
  const images = data["Photos/عکس ها"]?.split(',');
  const tributes = data["Tributes"]?.split((','));
  console.log("TRIBS", tributes)

  return (
    <div className="portrait-tile">
      <div className="column">
        <h1>{data['First Name']} {data['Last Name']}</h1>
        <p>
          {data["Story (English)"]}
        </p>
      </div>
      <div className="portrait-image">
        <img src={images && images[0]} />
      </div>
      <div className="column">
        <h1>{data['اسم']} {data['فامیل']} </h1>
        <p>
          {data["داستان"]}
        </p>
      </div>
      <div className="tributes">
        {tributes?.map(tributeUrl => {
          let iconClassNames;
          if (tributeUrl.includes("twitter")) {
            iconClassNames = "fa-brands fa-twitter";
          }
          else if (tributeUrl.includes("instagram")) {
            iconClassNames = "fa-brands fa-instagram"
          }
          else if (tributeUrl.includes("reddit")) {
            iconClassNames = "fa-brands fa-reddit"
          }
          else if (tributeUrl.includes("tiktok")) {
            iconClassNames = "fa-brands fa-tiktok"
          }
          else {
            iconClassNames = "fa fa-globe"
          }
          return (
            <a target="_blank" style={{"fontSize":24}} href={tributeUrl}>
              <i className={iconClassNames} />
            </a>)
        })}

      </div>
    </div>)
}

