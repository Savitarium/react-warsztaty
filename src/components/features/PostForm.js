import {Row, Col, Form, Button} from "react-bootstrap";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {addPost} from "../../redux/postsRedux";
const PostForm = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishedDate, setPublishedDate] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [content, setContent] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addPost({title, author, publishedDate, shortDescription, content}));
        navigate('/');
        console.log('działa')
    }
    return (
        <section className="w-75 mx-auto">
            <Row>
                <Col>
                    <h2>Add Post</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="postAddForm" onSubmit={handleSubmit}>
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" value={title} placeholder="Enter title" onChange={e => setTitle(e.target.value)}></Form.Control>
                            <Form.Label className="pt-3">Author</Form.Label>
                            <Form.Control type="text" value={author} placeholder="Enter author" onChange={e => setAuthor(e.target.value)}></Form.Control>
                            <Form.Label className="pt-3">Published</Form.Label>
                            <Form.Control type="text" value={publishedDate} placeholder="Enter date" onChange={e => setPublishedDate(e.target.value)}></Form.Control>
                            <Form.Label className="pt-3">Short Description</Form.Label>
                            <Form.Control as="textarea" rows={5} type="text" value={shortDescription} placeholder="Enter short description here" onChange={e => setShortDescription(e.target.value)}></Form.Control>
                            <Form.Label className="pt-3">Main content</Form.Label>
                            <Form.Control as="textarea" rows={10} type="text" value={content} placeholder="Enter your post text" onChange={e => setContent(e.target.value)}></Form.Control>
                            <Button variant="primary" className="my-3" type="submit">Submit</Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </section>
    )
}
export default PostForm;