import shortid from "shortid";
//selectors
export const getAllPosts = (state) => state.posts;
export const getPostById = ({posts}, postId) => posts.find(post => post.id === postId);
// actions
const REMOVE_POST = 'app.post.REMOVE_POST';
const ADD_POST = 'app.post.ADD_POST';
const EDIT_POST = 'app.post.EDIT_POST';
export const removePost = (payload) => ({type: REMOVE_POST, payload});
export const addPost = payload => ({type: ADD_POST, payload});
export const editPost = payload => ({type: EDIT_POST, payload});
export const allCategories = ({ categories }) => categories;
export const getPostsByCategory = ({ posts }, category) =>
    posts.filter((post) => post.category === category);
// action creators
const postsReducer = (statePart = [], action) => {
    switch (action.type) {
        case REMOVE_POST:
            return statePart.filter(post => post.id !== action.payload);
        case ADD_POST:
            return [...statePart, {...action.payload, id: shortid()}];
        case EDIT_POST:
            return statePart.map(post => (post.id === action.payload.id ? { ...post, ...action.payload } : post));
        default:
            return statePart;
    };
};

export default postsReducer;