import React from 'react';
import Blogs from '../../components/blogs';
import { fetchAPI } from "../../lib/api";
import Seo from "../../components/seo";
import PropTypes from 'prop-types';
import 
  {
    Container
  }
from 'react-bootstrap';


const User2 = (props) => {
    const { blogs, homepage} = props;
    return(
      <React.Fragment>
        <Seo seo={homepage.seo}/>
        <Container>
            <div className="col-md-12">
                <Blogs blogs={blogs}/>
            </div>
        </Container>
      </React.Fragment>
    )
}
User2.propTypes = {
  blogs: PropTypes.array,
  homepage: PropTypes.object
};
export const getStaticProps = async () => {
    const blogs = await fetchAPI('/user-2-s');
    return {
      props: {blogs: blogs} // will be passed to the page component as props
    };
};
export default User2;