import {allCategories} from "../../../redux/categoriesRedux";
import { useSelector } from "react-redux";
import { Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const Categories = () => {
  const categories = useSelector(allCategories);
  return (
    <section>
      <h1 className="mb-5 justify-content-center d-flex">Categories</h1>
      <Row>
        {categories.map((category) => (
          <Card key={category} className="d-flex flex-colum">
            <Link to={"/category/" + category} className="text-decoration-none">
              {category}
            </Link>
          </Card>
        ))}
      </Row>
    </section>
  );
};

export default Categories;
