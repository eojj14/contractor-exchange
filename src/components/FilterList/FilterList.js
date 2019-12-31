import React from 'react';
import PropTypes from 'prop-types';
import classes from './FilterList.module.scss';
import FilterItem from '../FilterItem/FilterItem';
import { map, uniq } from 'lodash';

const { instanceOf } = PropTypes;

class FilterList extends React.Component {

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     activeItem: 0,
  //   };

  //   this.onClickItem = this.onClickItem.bind(this);
  // }

  // onClickItem = (idx) => {
  //   this.setState({ activeItem: idx });
  // }

  render() {
    const {
      props: { data },
    } = this;

    return (
      <div className={classes.container}>
        <FilterItem title='Location' data={uniq(map(data, 'Location')).sort()} />
      </div>
    )
  }
}

FilterList.defaultProps = {
  data: []
};

FilterList.propTypes = {
  data: instanceOf(Array),
};

export default FilterList;