import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../CSS/NavigatorCSS.css'

function Navigator() {
  const location = useLocation();
  const paths = location.pathname.split('/').filter(path => path !== '');

  const links = paths.map((path, index) => {
    const url = `/${paths.slice(0, index + 1).join('//')}`;
    const name = path.charAt(0).toUpperCase() + path.slice(1);
    return <Link key={url} to={url}>{name}</Link>;
  });

  links.unshift(<Link key="/" to="/">Home/</Link>);


  return (
    <div className='navigator-con'>
      {links}
    </div>
  );
}

export default Navigator
