import React from 'react';

class Filter extends React.PureComponent {
  render() {
    const { activeFilter, handleActiveFilter } = this.props;

    return (
      <ul className="filters">
        <li>
          <a
            href="#/"
            className={activeFilter === 'all' ? 'selected' : ''}
            onClick={() => handleActiveFilter('all')}
          >
            All
          </a>
        </li>

        <li>
          <a
            href="#/active"
            className={activeFilter === 'active' ? 'selected' : ''}
            onClick={() => handleActiveFilter('active')}
          >
            Active
          </a>
        </li>

        <li>
          <a
            href="#/completed"
            className={activeFilter === 'comleted' ? 'selected' : ''}
            onClick={() => handleActiveFilter('completed')}
          >
            Completed
          </a>
        </li>
      </ul>
    );
  }
}

export default Filter;
