import React from 'react';
import testFile1 from './images/testFile1.png';
import testFile2 from './images/testFile2.png';
import testFile3 from './images/testFile3.png';

const DownloadTemplet = () => {
    const fileListLink = [
        {
            fileImage: testFile1,
            fileLink: 'https://docs.google.com/spreadsheets/d/1RfMhrUb1LLZmNwsIRNU9Qx7Y7eHGhHv0La9sIcEcn1k/export?format=xlsx'
        },
        {
            fileImage: testFile2,
            fileLink: 'https://docs.google.com/spreadsheets/d/17tg8nib1diQskX5f6JJ4b07tw6Kcu1_kDtDD39LnT4c/export?format=xlsx'
        },
        {
            fileImage: testFile3,
            fileLink: 'https://docs.google.com/spreadsheets/d/1wlThaGWKNXdNBdBvxmNauOH4_hZ8_x0uxud67IcxCr8/export?format=xlsx'
        }
    ]
    const handleClick = file => {
        console.log(file)
    }
    return (
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            {
                fileListLink.map((file, index) => (
                    <div key={Math.random()} style={{width: '30%'}}>
                        <img src={file.fileImage} alt={`testFile${index}`} style={{width: '100%'}} />
                        <div  style={{textAlign: 'center', marginTop: 15}}>
                        {/* <button onClick={() => handleClick(file.fileLink)}>Download template</button> */}
                        <a href={file.fileLink} download>Download template</a>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default DownloadTemplet;