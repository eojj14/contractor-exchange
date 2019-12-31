import React from 'react';
import PropTypes from 'prop-types';
import classes from './FilterItem.module.scss';
import Checkbox from '../Checkbox/Checkbox';

const { instanceOf, string } = PropTypes;

const FilterItem = (props) => {
  const {
    title,
    data,
  } = props;

  if (data.length === 0 || data[0] === undefined) return null;

  return (
    <div className={classes.container}>
        <div className={classes.title}>{title}</div>
          {data.length > 0 &&
            data.map((i, idx) =>
            <div key={idx} className={classes.item}>
              <Checkbox title={i} />
            </div>
            )
          }
    </div>
  );
};

FilterItem.defaultProps = {
  data: []
};

FilterItem.propTypes = {
  title: string,
  data: instanceOf(Array),
};

export default FilterItem;
