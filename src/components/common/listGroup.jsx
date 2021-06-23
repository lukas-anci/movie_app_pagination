// 1. Paduoti reikalinga info i list group

// 2. list group pasidaryti saraso jsx

// 3. dinamiskai sugeneruoti tiek el kiek yra genru

const ListGroup = (props) => {
  const { items, textProperty, valueProperty } = props;
  return (
    <ul className="list-group">
      {items.map((genre) => (
        <li
          key={genre[valueProperty]}
          onClick={() => props.onGenreChange(genre)}
          className="list-group-item"
        >
          {genre[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  valueProperty: '_id',
  textProperty: 'name',
};

export default ListGroup;
