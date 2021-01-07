import React from 'react'
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from '../shared/Image';
import ReactHtmlParser from 'react-html-parser';
const Blogs = (props) => {
    const { blogs } = props;
    return(
        <div className="small-wrapper col-md-12">
            
            {
                blogs.map((blog, index) => {
                    return(<div className='col-md-12' key={index}>
                        <Row>
                            <Col className='col-md-3'>
                            <Image image={blog?.image[0]?.formats?.medium} className='blog-image' />
                            </Col>
                            <Col className='col-md-9'>
                                <h5>{ReactHtmlParser(blog.title)}</h5>
                                <p>{ReactHtmlParser(blog.description)}</p>
                                <p>{ReactHtmlParser(blog.content)} </p>
                                
                            </Col>
                        </Row>
                    </div>)
                })
            }
         
        </div>
    )
}
Blogs.propTypes = {
    articles: PropTypes.array
};
export default Blogs;