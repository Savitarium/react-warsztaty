import EditPostForm from "../../features/EditPostForm";
import {Navigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {getPostById} from "../../../redux/postsRedux";
import {dateToString} from "../../../Utils/dateToStr";

const Edit = () => {
    const {id} = useParams();
    const postData = useSelector(state => getPostById(state, id));
    if(!postData) return <Navigate to="/" />
    return (
        <section className="w-75 mx-auto">
            <EditPostForm title={postData.title}
                          author={postData.author}
                          publishedDate={dateToString(postData.publishedDate)}
                          shortDescription={postData.shortDescription}
                          content={postData.content}/>
        </section>
    )
}
export default Edit;