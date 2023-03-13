import PostForm from "./PostForm";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {editPost} from "../../redux/postsRedux";
const EditPostForm = (props) => {
    const {id} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    console.log(props);
    const handleSubmit = post => {
        dispatch(editPost({ ...post, id }));
        navigate('/')
    };
    return (
        <PostForm
            action={handleSubmit}
            actionText="Edit post"
            title={props.title}
            author={props.author}
            publishedDate={props.publishedDate}
            shortDescription={props.shortDescription}
            content={props.content}
        />
    )
}
export default EditPostForm;
