import shortid from "shortid";
//selectors
export const getAllPosts = (state) => state.posts;
export const getPostById = ({posts}, postId) => posts.find(post => post.id === postId);
// actions
const REMOVE_POST = 'app.post.REMOVE_POST';
const ADD_POST = 'app.post.ADD_POST';
export const removePost = (payload) => ({type: REMOVE_POST, payload});
export const addPost = payload => ({type: ADD_POST, payload});
// action creators
const postsReducer = (statePart = [], action) => {
    switch (action.type) {
        case REMOVE_POST:
            return statePart.filter(post => post.id !== action.payload);
        case ADD_POST:
            return [...statePart, {...action.payload, id: shortid()}];
        default:
            return statePart;
    };
};

export default postsReducer;