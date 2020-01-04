import React from 'react';
import PropTypes from 'prop-types';
import classes from './Banner.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const { string } = PropTypes;

const Banner = (props) => {
  const {
    title,
    subTitle
  } = props;

  return (
    <div className={classes.container}>
      <div className={classes.title}>
          {title}
          <div className={classes.login}>
            <FontAwesomeIcon
              icon={['fas', 'sign-in-alt']}
              className={classes.loginIcon}
            />
            <div className={classes.loginText}>Login</div>
          </div>
        </div>
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
