import React from 'react';
import PropTypes from 'prop-types';
import classes from './Search.module.scss';
import FilterList from '../FilterList/FilterList';
import SearchItem from '../SearchItem/SearchItem';
import Select from 'react-select';

const { instanceOf, string, bool } = PropTypes;

class Search extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedOption: { value: 'name', label: 'Sort By Name' },
    };

    this.onSelectClick = this.onSelectClick.bind(this);
  }

  onSelectClick = (option) => {
    this.setState({ selectedOption: option });
  }

  render() {
    const {
      props: { data, type, visible },
      state: { selectedOption },
    } = this;

    const options = [
      { value: 'name', label: 'Sort By Name' },
      { value: 'location', label: 'Sort By Location' },
    ];

    if (!visible) return null;

    return (
      <div className={classes.container}>
        <div className={classes.filters}>
          <div className={classes.title}>Filters</div>
          <FilterList data={data} />
        </div>
        <div className={classes.results}>
          <div className={classes.titleWrapper}>
            <div className={classes.title}>Results ({data.length} {type}s)</div>
            <div className={classes.sort}>
              <Select options={options} value={selectedOption} onChange={this.onSelectClick} />
            </div>
          </div>
          {data.length > 0 &&
            data.map((i, idx) => <SearchItem key={idx} data={i} type={type} />)
          }
        </div>
      </div>
    )
  }
}

Search.defaultProps = {
  type: null,
  data: [],
  visible: false,
};

Search.propTypes = {
  type: string,
  data: instanceOf(Array),
  visible: bool,
};

export default Search;