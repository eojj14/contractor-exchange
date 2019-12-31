import React from 'react';
import PropTypes from 'prop-types';
import classes from './Checkbox.module.scss';

const { string } = PropTypes;

const Checkbox = (props) => {
  const {
    title,
  } = props;

  return (
    <label className={classes.container}>
      {title}
      <input type="checkbox" />
      <span className={classes.checkmark}></span>
    </label>
  );
};

Checkbox.defaultProps = {
  title: '',
};

Checkbox.propTypes = {
  title: string,
};

export default Checkbox;
