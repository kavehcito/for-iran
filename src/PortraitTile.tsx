
import React from 'react';
export default function PortraitTile({ data }: any) {
  const images = data["Photos/عکس ها"]?.split(',');
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

    </div>)
}

