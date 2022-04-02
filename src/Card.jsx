import React from 'react';

function Card(props)
{
  return (
    <>
    <div id="mainbody">
      <img src={props.img}></img>
      <p id='name'>{props.name}</p>
      <a id='sitelink' href={props.site}>Watch Now</a>
    </div>
    </>
  );
}

export default Card;