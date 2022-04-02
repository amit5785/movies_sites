import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import './index.css';
import Sitesdata from './Sitesdata';
import Header from './Header';
function makingcard(value)
{
  return (
    <>
    <Card 
      img={value.img}
      name={value.name}
      site={value.site}
    />
    </>
  );
}

ReactDOM.render(
  <>
  <Header length={Sitesdata.length} />
  <div id='cardHolder'>
  {Sitesdata.map(makingcard)}
  </div>
  </>,document.getElementById('root')
);
