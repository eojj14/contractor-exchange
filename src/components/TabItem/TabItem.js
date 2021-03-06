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

  if (title === 'Contractors') icon = 'hard-hat';
  if (title === 'Jobs') icon = 'brush';

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <FontAwesomeIcon
          icon={['fas', icon]}
          className={classes.icon}
        />
        {title}
      </div>
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
