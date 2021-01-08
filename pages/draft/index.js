import React from 'react';
import Seo from "../../components/seo";
import Draft from '../../components/blogs/draft'
import 
  {
    Container
  }
from 'react-bootstrap';


const DraftPage = (props) => {
    const { blogs, homepage } = props;
    return(
      <React.Fragment>
        <Seo seo={homepage.seo}/>
        <Container>
            <div className="col-md-12">
                <Draft />
            </div>
        </Container>
      </React.Fragment>
    )
}


export default DraftPage;