import {Button, Form} from "react-bootstrap";
import {useState} from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useForm} from "react-hook-form";
import {allCategories} from "../../redux/categoriesRedux";
import {useSelector} from "react-redux";
const PostForm = ({ action, actionText, ...props }) => {
    const categories = useSelector(allCategories);
    console.log('postform propsy ', props.categoryName);
    const { register, handleSubmit: validate, formState: { errors } } = useForm();
        const [title, setTitle] = useState(props.title || '');
        const [author, setAuthor] = useState(props.author || '');
        const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
        const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
        const [content, setContent] = useState(props.content || '');
        const [contentError, setContentError] = useState(false);
        const [dateError, setDateError] = useState(false);
        const [category, setCategory] = useState(props.categoryName || "");
    const handleSubmit = () => {
        setContentError(!content);
        setDateError(!publishedDate);
        if(content && publishedDate) {
        action({ title, author, publishedDate, shortDescription, content, category });
        }
    };

    return (
        <Form onSubmit={validate(handleSubmit)}>
            <Form.Group className="mb-3" controlId="postAddForm">
                <Form.Label>Title</Form.Label>
                <Form.Control {...register("title", { required: true, minLength: 4 })} type="text" value={title} onChange={e => setTitle(e.target.value)}></Form.Control>
                {errors.title && <small className="d-block form-text text-danger mt-2">This field is required and min. lenght = 4 sign</small>}
                <Form.Label className="pt-3">Author</Form.Label>
                <Form.Control {...register("author", {required: true, minLength: 4})} type="text" value={author} onChange={e => setAuthor(e.target.value)}></Form.Control>
                {errors.author && <small className="d-block form-text text-danger mt-2">This field is required and min. lenght = 4 sign</small>}
                <Form.Label className="pt-3">Published</Form.Label>
                <DatePicker selected={publishedDate ? new Date(publishedDate) : null} onChange={(date) => setPublishedDate(date)} />
                {dateError && <small className="d-block form-text text-danger mt-2">Date can't be empty</small>}
                <Form.Group className="mb-3 col-3" controlId="category">
                    <Form.Label className="d-flex justify-content-start">Category</Form.Label>
                    <Form.Select {...register("category", { required: true })} as="select" value={category} onChange={(e) => setCategory(e.target.value)} aria-label="Select category">
                        <option value="" disabled selected>Select category</option>
                        {categories.map((category, index) => (
                            <option key={index} value={category}>
                                {category}
                            </option>
                        ))}
                        {errors.categoryId && (
                            <small className="d-block form-text text-danger mt-2">
                                This field is required
                            </small>
                        )}
                    </Form.Select>
                    {errors.category && (<small className="d-block form-text text-danger mt-2">This field is required</small>)}
                </Form.Group>
                <Form.Label className="pt-3">Short Description</Form.Label>
                <Form.Control {...register("shortDescription", {required: true, minLength: 21})} as="textarea" rows={5} type="text" value={shortDescription} onChange={e => setShortDescription(e.target.value)}></Form.Control>
                {errors.shortDescription && <small className="d-block form-text text-danger mt-2">This field is required and min. lenght = 21 sign</small>}
                <Form.Label className="pt-3">Main content</Form.Label>
                <ReactQuill theme="snow" value={content} onChange={setContent} />
                {contentError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
                <Button variant="primary" className="my-3" type="submit">{actionText}</Button>
            </Form.Group>
        </Form>
    )
}
export default PostForm;