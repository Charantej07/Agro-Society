// import React from 'react';

// import { connect } from 'react-redux';
// import { Row, Col } from 'reactstrap';

// import actions from '../../actions';
// import banners from './banners.json';
// import CarouselSlider from '../../components/Common/CarouselSlider';
// import { responsiveOneItemCarousel } from '../../components/Common/CarouselSlider/utils';

// class Homepage extends React.PureComponent {
//   render() {
//     return (
//       <div className='homepage'>
//         <Row className='flex-row'>
//           <Col xs='12' lg='6' className='order-lg-2 mb-3 px-3 px-md-2'>
//             <div className='home-carousel'>
//               <CarouselSlider
//                 swipeable={true}
//                 showDots={true}
//                 infinite={true}
//                 autoPlay={false}
//                 slides={banners}
//                 responsive={responsiveOneItemCarousel}
//               >
//                 {banners.map((item, index) => (
//                   <img key={index} src={item.imageUrl} />
//                 ))}
//               </CarouselSlider>
//             </div>
//           </Col>
//           <Col xs='12' lg='3' className='order-lg-1 mb-3 px-3 px-md-2'>
//             <div className='d-flex flex-column h-100 justify-content-between'>
//               <img src='/images/banners/banner-2.jpg' className='mb-3' />
//               <img src='/images/banners/banner-5.jpg' />
//             </div>
//           </Col>
//           <Col xs='12' lg='3' className='order-lg-3 mb-3 px-3 px-md-2'>
//             <div className='d-flex flex-column h-100 justify-content-between'>
//               <img src='/images/banners/banner-3.jpg' className='mb-3' />
//               <img src='/images/banners/banner-4.jpg' />
//             </div>
//           </Col>
//         </Row>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {};
// };

// export default connect(mapStateToProps, actions)(Homepage);

import React from 'react';
import { connect } from 'react-redux';
import {
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText
} from 'reactstrap';
import actions from '../../actions';

class Homepage extends React.PureComponent {
  render() {
    return (
      <div className='homepage'>
        <Row className='flex-row'>
          <Col xs='12' lg='6' className='order-lg-2 mb-3 px-3 px-md-2'>
            <div className='home-content'>
              <h1 className='mb-4'>Welcome to Agro Society</h1>
              <p className='mb-4'>
                Discover the freshest crop products sourced directly from local
                farmers. At Agro Society, we're dedicated to connecting you with
                the best produce while supporting our farming communities.
              </p>
              <p className='mb-4'>
                Explore a diverse selection of fruits, vegetables, grains, and
                more, all grown with care and harvested at peak freshness.
                Whether you're a chef, a retailer, or simply passionate about
                wholesome food, Agro Society is your go-to destination for
                premium crop products.
              </p>
              <p className='mb-4'>
                Join our community of farmers, producers, and food enthusiasts.
                Together, let's celebrate the bounty of nature and the vibrant
                spirit of agriculture.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs='12'>
            <Row>
              <Col md='3' className='mb-4'>
                <Card>
                  <CardImg
                    top
                    src='/images/banners/banner-1.jpg'
                    alt='Banner 1'
                  />
                  <CardBody>
                    <CardTitle tag='h5'>Fresh Fruits</CardTitle>
                    <CardText>
                      Explore a variety of delicious fruits freshly picked from
                      local farms.
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col md='3' className='mb-4'>
                <Card>
                  <CardImg
                    top
                    src='/images/banners/banner-2.jpg'
                    alt='Banner 2'
                  />
                  <CardBody>
                    <CardTitle tag='h5'>Farm Fresh Vegetables</CardTitle>
                    <CardText>
                      Discover a range of nutritious vegetables straight from
                      the fields.
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col md='3' className='mb-4'>
                <Card>
                  <CardImg
                    top
                    src='/images/banners/banner-3.jpg'
                    alt='Banner 3'
                  />
                  <CardBody>
                    <CardTitle tag='h5'>Wholesome Grains</CardTitle>
                    <CardText>
                      Find a selection of wholesome grains grown with care by
                      local farmers.
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col md='3' className='mb-4'>
                <Card>
                  <CardImg
                    top
                    src='/images/banners/banner-4.jpg'
                    alt='Banner 4'
                  />
                  <CardBody>
                    <CardTitle tag='h5'>Fresh Herbs</CardTitle>
                    <CardText>
                      Enhance your dishes with our range of aromatic and
                      flavorful herbs.
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, actions)(Homepage);
