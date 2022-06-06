import React from 'react';
import img from '../../../assets/orderparts/upload-cad-01.svg';
import img2 from '../../../assets/orderparts/setupparameters-01.svg';
import img3 from '../../../assets/orderparts/lists-01.svg';
import img4 from '../../../assets/orderparts/NEWsetup-parameters-01.svg';


const orderSystems=[
    {
        name: 'Inform your requirement parts',
        img: img ,
        description: 'Multiple designs for different parts can be imported at the same time to produce a single quote. In less than a minute, a detailed cost estimation appears on the screen.'
    },
    {
        name: 'Choose the process and communication',
        img: img2 ,
        description: 'First, select the manufacturing process you require. You can then choose from over 70 materials, both metals and plastics, and from a wide range of finishes and certifications.'
    },
    {
        name: 'Order your parts online/offline',
        img: img3 ,
        description: 'Once you have selected the required options, all you need to do is confirm the order and pay for it on the secure payment platform. Your design will be analysed by engineers.'
    },
    {
        name: 'Receive your parts',
        img: img4 ,
        description: 'Within a short amount of time, you will receive the parts you ordered directly to your shipping address. You can track your package at any time in your personal account.'
    },
]

const OrderParts = () => {
    return (
        <div className=' p-4 rounded-lg'>
            <h2 className='text-3xl mb-12 font-medium text-center'>How to from us?</h2>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-7'>
                {
                    orderSystems.map((o,i) => <div key={i} className='rounded-lg p-6 shadow-xl'>
                        <h3 className='flex justify-center font-bold text-xl mt-10 mb-6'>{o.name}</h3>
                        <div className='flex'>
                            <p>{o.description}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default OrderParts;