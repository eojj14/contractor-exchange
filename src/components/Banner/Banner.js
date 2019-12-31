import React from 'react';
import PropTypes from 'prop-types';
import classes from './Banner.module.scss';

const { string } = PropTypes;

const Banner = (props) => {
  const {
    title,
    subTitle
  } = props;

  return (
    <div className={classes.container}>
      <div className={classes.title}>{title}</div>
      <div className={classes.subTitle}>{subTitle}</div>
    </div>
  );
};

Banner.defaultProps = {
  title: '',
  subTitle: ''
};

Banner.propTypes = {
  title: string,
  subTitle: string,
};

export default Banner;
