import {Button, Form} from "react-bootstrap";
import {useState} from "react";
const PostForm = ({ action, actionText, ...props }) => {
        const [title, setTitle] = useState(props.title || '');
        const [author, setAuthor] = useState(props.author || '');
        const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
        const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
        const [content, setContent] = useState(props.content || '');
    const handleSubmit = e => {
        e.preventDefault();
        action({ title, author, publishedDate, shortDescription, content });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="postAddForm">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" value={title} onChange={e => setTitle(e.target.value)}></Form.Control>
                <Form.Label className="pt-3">Author</Form.Label>
                <Form.Control type="text" value={author} onChange={e => setAuthor(e.target.value)}></Form.Control>
                <Form.Label className="pt-3">Published</Form.Label>
                <Form.Control type="text" value={publishedDate} onChange={e => setPublishedDate(e.target.value)}></Form.Control>
                <Form.Label className="pt-3">Short Description</Form.Label>
                <Form.Control as="textarea" rows={5} type="text" value={shortDescription} onChange={e => setShortDescription(e.target.value)}></Form.Control>
                <Form.Label className="pt-3">Main content</Form.Label>
                <Form.Control as="textarea" rows={10} type="text" value={content} onChange={e => setContent(e.target.value)}></Form.Control>
                <Button variant="primary" className="my-3" type="submit">{actionText}</Button>
            </Form.Group>
        </Form>
    )
}
export default PostForm;