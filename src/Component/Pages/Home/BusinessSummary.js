import React from 'react';

const BusinessSummary = () => {
    return (
        <div className='my-20'>
            <h2 className='text-3xl mb-12 font-medium text-center'>Ready to Order Your Parts Online?</h2>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-7'>
                <div className='text-center'>
                    <p className='text-xl font-medium'>Satisfied Customers</p>
                    <p className='text-xl py-4 font-medium'>3000 +</p>
                </div>
                <div className='text-center'>
                    <p className='text-xl font-medium'>Served Countries</p>
                    <p className='text-xl py-4 font-medium'>50 +</p>
                </div>
                <div className='text-center'>
                    <p className='text-xl font-medium'>Delivery Channel</p>
                    <p className='text-xl py-4 font-medium'>300 +</p>
                </div>
                <div className='text-center'>
                    <p className='text-xl font-medium'>Parts Quoted</p>
                    <p className='text-xl py-4 font-medium'>10000 +</p>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;