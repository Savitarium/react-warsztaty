import {useSelector} from "react-redux";
import {getAllPosts} from "../../redux/postsRedux";
import {Button, Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import {dateToString} from "../../Utils/dateToStr";

const Posts = () => {
    const posts = useSelector(getAllPosts);
    return(
        <div>
            <Row className="justify-content-between">
                <Col className="col-auto mr-auto">
                    <h2>All Posts</h2>
                </Col>
                <Col className="col-auto">
                    <Link to={'/post/add'}>
                        <Button variant="outline-info">Add post</Button>
                    </Link>
                </Col>
            </Row>
            <Row className="py-5">
                {posts.map(post => (
                    <Col key={post.id} md={3}>
                        <Card>
                            <Card.Body className="md-4">
                                <Card.Title>
                                    <h3>{post.title}</h3>
                                </Card.Title>
                                <Card.Text>
                                    <p className="my-0 py-0"><strong>Author:</strong> {post.author}</p>
                                    <p className="my-0 py-0"><strong>Published:</strong> {dateToString(post.publishedDate)}</p>
                                    <p className="my-0 py-0"><strong>Category: </strong> {post.category}</p>
                                </Card.Text>
                                <Card.Text><p>{post.shortDescription}</p></Card.Text>
                                <Link to={`/post/${post.id}`}>
                                    <Button variant="primary">Read more</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    ))}
            </Row>
        </div>
    )
}

export default Posts;
