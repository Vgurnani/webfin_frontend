import React from 'react';
import Layout from '../../components/shared/Layout';
import Blogs from '../../components/blogs';
import { fetchAPI } from "../../lib/api";
import Seo from "../../components/seo";
import PropTypes from 'prop-types';
import 
  {
    Container
  }
from 'react-bootstrap';


const User1 = (props) => {
    const { blogs, homepage } = props;
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
User1.propTypes = {
  blogs: PropTypes.array,
  homepage: PropTypes.object
};
export const getStaticProps = async () => {
    const blogs = await fetchAPI('/user-1-s');
    return {
      props: {blogs: blogs} // will be passed to the page component as props
    };
};
export default User1;