import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({ repo }) => {
  return (

    
    <div className='card1'>
      <h3>
      <ul>
        <li>
        <a href={repo.html_url}>{repo.name}</a>
        </li>
      </ul>
      </h3>
    </div>
    
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
};

export default RepoItem;
