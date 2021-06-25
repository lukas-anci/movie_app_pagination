import PropTypes from 'prop-types';
// stateles functional component
const Pagination = (props) => {
  const { itemCount, pageSize, currentPage } = props;

  // ic 9 ps 4
  // [1,2,3]

  const pageCount = Math.ceil(itemCount / pageSize);

  if (pageCount === 1) return null;

  const pages = () => {
    const arr = [];
    for (let i = 1; i <= pageCount; i++) {
      arr.push(i);
    }
    return arr;
  };

  return (
    <nav>
      <ul className="pagination">
        {pages().map((i) => (
          <li
            key={i}
            className={'page-item' + (currentPage === i && ' active')}
          >
            {/*  eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a onClick={() => props.onPageChange(i)} className="page-link">
              {i}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Pagination;
