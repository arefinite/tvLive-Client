import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import OrderParts from './OrderParts';
import Reviews from './Reviews';
import ToolsOrParts from './ToolsOrParts';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Services/>
            <OrderParts/>
            <BusinessSummary/>
            <ToolsOrParts/>
            <Reviews/>
        </div>
    );
};

export default Home;