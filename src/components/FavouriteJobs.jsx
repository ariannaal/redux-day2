import { useSelector, useDispatch } from 'react-redux';
import { ListGroup, ListGroupItem, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { StarFill } from 'react-bootstrap-icons';
import { removeFromFavouritesAction } from '../redux/actions';

const FavouriteJobs = () => {
    const favourites = useSelector((state) => state.favourites.favourites); //prendo i preferiti dallo stato
    const dispatch = useDispatch();

    return (
        <Container>
            <Row>
                <Col xs={10} className="mx-auto my-3">
                    <h1>Favourite Jobs</h1>
                </Col>
                <Col xs={10} className="mx-auto my-3">
                    <ListGroup>
                        {favourites.map((fav, i) => (
                            <ListGroupItem key={i}>
                                <StarFill
                                    color="gold"
                                    className="me-4 star-liked"
                                    onClick={() => dispatch(removeFromFavouritesAction(fav))}
                                />
                                <Link to={'/' + fav}>{fav}</Link>
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
};

export default FavouriteJobs;
