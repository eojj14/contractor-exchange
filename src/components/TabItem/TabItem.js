import React from 'react';
import PropTypes from 'prop-types';
import classes from './TabItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const { string } = PropTypes;

const TabItem = (props) => {
  const {
    title,
  } = props;

  var icon = 'home';

  if (title === 'Find Contractors') icon = 'hard-hat';
  if (title === 'Find Jobs') icon = 'brush';

  return (
    <div className={classes.container}>
      <FontAwesomeIcon
        icon={['fas', icon]}
        className={classes.icon}
      />
      <div className={classes.title}>{title}</div>
    </div>
  );
};

TabItem.defaultProps = {
  title: '',
};

TabItem.propTypes = {
  title: string,
};

export default TabItem;
