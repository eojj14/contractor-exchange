import React from 'react';
import PropTypes from 'prop-types';
import classes from './TabList.module.scss';
import classNames from 'classnames';

const { instanceOf } = PropTypes;

class TabList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      activeItem: 0,
    };

    this.onClickItem = this.onClickItem.bind(this);
  }

  onClickItem = (idx) => {
    this.setState({ activeItem: idx });
  }

  render() {
    const {
      onClickItem,
      props: { children },
      state: { activeItem }
    } = this;

    return (
      <>
      <div className={classes.container}>
        {children.length > 0 &&
          children.map((i, idx) =>
            <button
              key={idx}
              onClick={() => onClickItem(idx)}
              className={classNames(classes.item, idx === activeItem ? classes.activeItem : null)}>
              {i}
            </button>
          )}
      </div>
      <div className={classes.search}>
        {children.map((i, idx) => React.cloneElement(i.props.children, { ...i.props, key: idx, visible: idx === activeItem }))}
      </div>
      </>
    )
  }
}

TabList.defaultProps = {
  children: []
};

TabList.propTypes = {
  children: instanceOf(Array),
};

export default TabList;