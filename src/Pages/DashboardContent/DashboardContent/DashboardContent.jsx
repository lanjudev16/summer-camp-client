import React from 'react';
import DashNav from '../DashNav/DashNav';
import NetIncome from '../NetIncome/NetIncome';
import SelesSupport from '../SalesSupport/SelesSupport';
import OverallSeles from '../OverallSeles/OverallSeles';

const DashboardContent = () => {
    return (
        <div className='my-4  mx-6'>
            <div className='top-nav-border-custom'>
                <DashNav></DashNav>
            </div>
            <div className='lg:grid lg:grid-cols-3 gap-4'>
                <div className='grid lg:grid-cols-2 col-span-2 gap-4'>
                    <NetIncome></NetIncome>
                    <NetIncome></NetIncome>
                    <NetIncome></NetIncome>
                    <NetIncome></NetIncome>
                </div>
                <div>
                    <SelesSupport></SelesSupport>
                </div>
            </div>
            <div className='lg:grid lg:grid-cols-3 gap-4'>
                <div className='col-span-2 gap-4'>
                    <OverallSeles></OverallSeles>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default DashboardContent;