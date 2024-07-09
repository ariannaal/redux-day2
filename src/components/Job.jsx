import { useSelector, useDispatch } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Star, StarFill } from 'react-bootstrap-icons';
import { addToFavouritesAction, removeFromFavouritesAction } from '../redux/actions';

const Job = ({ data }) => {
  const favourites = useSelector((state) => state.favourites.favourites);
  const dispatch = useDispatch();

  const isFav = favourites.includes(data.company_name);

  const handleFavouriteClick = () => {
    if (isFav) {
      dispatch(removeFromFavouritesAction(data.company_name));
    } else {
      dispatch(addToFavouritesAction(data.company_name));
    }
  };

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: '1px solid #00000033', borderRadius: 4 }}
    >
      <Col xs={3} className="d-flex align-items-center">
        {isFav ? (
          <StarFill
            color="gold"
            size={20}
            className="me-4"
            onClick={handleFavouriteClick}
            style={{ cursor: 'pointer' }}
          />
        ) : (
          <Star
            color="gold"
            size={20}
            className="me-4"
            onClick={handleFavouriteClick}
            style={{ cursor: 'pointer' }}
          />
        )}
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  );
};

export default Job;
