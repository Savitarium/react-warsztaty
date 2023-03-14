import styles from './Post.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {Link, Navigate, useParams} from "react-router-dom";
import {getPostById} from "../../../redux/postsRedux";
import {Row, Col, Button, Modal} from "react-bootstrap";
import {useState} from "react";
import {removePost} from "../../../redux/postsRedux";
import {dateToString} from "../../../Utils/dateToStr";

const Post = () => {
    const {id} = useParams();
    const postData = useSelector(state => getPostById(state, id));
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    if(!postData) return <Navigate to="/" />

    const handleClose = () => setShow(false);
    const handleDelete = () => setShow(true);
    const deletePost = (e) => {
        e.preventDefault();
        dispatch(removePost(postData.id));
        setShow(false);
    }
    return (
        <section className="w-75 mx-auto">
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Deleting Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you shure?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={deletePost}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
            <Row className="justify-content-between">
                <Col className="col-auto mr-auto">
                    <h2>{postData.title}</h2>
                </Col>
                <Col className="col-auto">
                    <Link to={`/edit/${postData.id}`}>
                        <Button variant="outline-info">Edit</Button>
                    </Link>
                    <Link to="#">
                        <Button variant="outline-danger" onClick={handleDelete}>Delete</Button>
                    </Link>
                </Col>
            </Row>
            <Row className="py-3">
                <Col>
                    <p className="my-0 py-0"><strong>Author: </strong>{postData.author}</p>
                    <p className="my-0 py-0"><strong>Published: </strong>{dateToString(postData.publishedDate)}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p dangerouslySetInnerHTML={{ __html: postData.content }} />
                </Col>
            </Row>
        </section>
    )
}
export default Post;