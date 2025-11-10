import React, {Fragment} from 'react';
import {Helmet} from "react-helmet";
import LayoutDefault from "layouts/LayoutDefault";
import Breadcrumb from "components/breadcrumb/BreadcrumbOne";
import breadcrumbBg from "assets/img/bg/bg-image-54.jpg";
import ContactInfo from "container/contact/ContactInfoOne";
import ContactForm from "components/forms/ContactFormTwo";
import Header from "components/header/HeaderThree";
import Footer from "container/footer/FooterFour";
import Map from '../../components/googlemap/map'
import { Container } from 'react-bootstrap';

const ContactClassic = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Wpmoda - Contact</title>
            </Helmet>

            <LayoutDefault className="template-color-1 template-font-1">
                <Header/>
                <Breadcrumb
                    title="Contact"
                    bg={breadcrumbBg}
                />
                <ContactInfo/>
                <Container >
                    <div className='col-lg-8 col-md-10 col-sm-12' style={{justifyContent:"center",display:"flex",margin:"0 auto"}}>
                <ContactForm/>
                </div>
                </Container>
                <Map/>
                <Footer/>
            </LayoutDefault>
        </Fragment>
    );
};

export default ContactClassic;