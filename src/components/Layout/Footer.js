import Link from 'next/link'
import React from 'react'
import { Col, Layout, Row} from 'antd';

const {  Footer } = Layout;
export default function FooterDesign() {
  return (
    <div style={{"textAlign":'center','width':'100%','height':'20vh','backgroundColor':'black','color':'white'}}> 
     
        <Row style={{'paddingTop':'50px'}} >
            <Col span={6}><h1>PC Builder</h1></Col>
            <Col span={6}>
                
                <ul>
                    <li><a>Brands</a></li>
                    <li><a>Privacy Policy</a></li>
                </ul>
            </Col>
            <Col span={6}>
                <ul>
                    <li><a>About Us</a></li>
                    <li><a>Terms and Conditions</a></li>
                    <li><a>Blogs</a></li>
                </ul>
            </Col>
            <Col span={6}>
                <ul>
                    <li><a> Online Delivery</a></li>
                    <li><a> Refund and Return Policy</a></li>
                    <li><a> Contact Us</a></li>
                </ul>
            </Col>
        </Row>
       
    </div>
  )
}
