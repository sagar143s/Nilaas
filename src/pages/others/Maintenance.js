import React,{Fragment} from 'react';
import {Helmet} from "react-helmet";
import LayoutDefault from "layouts/LayoutDefault";
import MaintenanceContent from "container/maintenance/MaintenanceContent";

const Maintenance = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Maintenance ||Wpmoda - Dubai's Leading Fashion Store | Shop the Latest Global Fashion Trends </title>
            </Helmet>
            <LayoutDefault className="template-color-1 template-font-1">
                <MaintenanceContent/>
            </LayoutDefault>
        </Fragment>
    );
};

export default Maintenance;
