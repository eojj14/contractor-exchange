import React from 'react';
import PropTypes from 'prop-types';
import classes from './SearchItem.module.scss';
import classNames from 'classnames';
import { size } from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const { instanceOf, string } = PropTypes;

class SearchItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
    };

    this.onClickItem = this.onClickItem.bind(this);
  }

  onClickItem = () => {
    const { data } = this.props;
    this.setState(prevState => ({ expanded: data && size(data) > 2 && !prevState.expanded }));
  }

  render() {
    const {
      data, type
    } = this.props;

    const { expanded } = this.state;

    return (
      <div className={classNames(classes.container, { [classes.expand]: expanded})}>
        <div className={classes.wrapper}>
          {data &&
            Object.keys(data).map((i, idx) => {
              return (idx < 2 || expanded) &&
              <div key={idx} className={classes.item}>
                <div className={classes.label}>{i}</div>
                {i !== 'Files' && <div className={classes.value}>{data[i]}</div>}
                {i === 'Name' && type === 'Contractor' &&
                  <div className={classes.cert}>
                    Licensed & Certified
                    <FontAwesomeIcon
                      icon={['fas', 'check']}
                      className={classes.certCheck}
                    />
                  </div>
                }
                {i === 'Files' && data[i] && data[i].length > 0 &&
                  <div className={classes.files}>
                    {data[i].map((i, idx) =>
                    <div className={classes.file} key={idx} title={i}>
                      <FontAwesomeIcon
                        icon={['fas', 'file-pdf']}
                        className={classes.fileIcon}
                      />
                      <div className={classes.fileDescription}>{i}</div>
                    </div>
                    )}
                  </div>
                }
              </div>
            }
            )
          }
        </div>
        <div className={classes.detailsWrapper}>
          {data && size(data) > 2 &&
            <button className={classes.contact} onClick={() => this.onClickItem()}>{expanded ? 'Close Details' : 'Show Details'}</button>
          }
          {data && <button className={classes.contact}>Contact {type}</button>}
        </div>
      </div>
    );
  }
}

SearchItem.defaultProps = {
  type: null,
  data: {},
};

SearchItem.propTypes = {
  type: string,
  data: instanceOf(Object),
};

export default SearchItem;
