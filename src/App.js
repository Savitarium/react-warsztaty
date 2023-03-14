import {Route, Routes} from "react-router-dom";
import Home from './components/pages/Home/Home';
import Post from "./components/pages/Post/Post";
import Add from "./components/pages/Post/Add";
import Edit from "./components/pages/Post/Edit";
import NotFound from "./components/pages/NotFound/NotFound";
import About from "./components/pages/About/About";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/views/Footer/Footer";
import {Container} from "react-bootstrap";
import Header from "./components/views/Header/Header";
import Categories from "./components/pages/Categories/Categories";
import CategoryFilter from "./components/features/CategoryFilter";
function App() {
  return (
    <div>
        <Container>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/post/:id' element={<Post />} />
                <Route path='/post/add' element={<Add />} />
                <Route path='/edit/:id' element={<Edit />} />
                <Route path="/category/" element={<Categories />} />
                <Route path="/category/:category" element={<CategoryFilter />} />
                <Route path='/about' element={<About />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
        </Container>
    </div>
  );
}

export default App;
