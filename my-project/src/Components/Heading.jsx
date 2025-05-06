import React from 'react';

const Heading = ({title, subTitle}) => {
    return (
        <div className='flex flex-col justify-center items-center '>
            <h1 className='text-3xl '>{title}</h1>
            <p>{subTitle}</p>
        </div>
    );
};

export default Heading;