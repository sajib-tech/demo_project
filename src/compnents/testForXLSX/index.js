import { Button, message, Steps } from 'antd';
import React, { useState } from 'react';
import DownloadTemplet from './DownloadTemplet';
import UploadTemplet from './UploadTemplet';

const { Step } = Steps;

const steps = [
    {
        title: 'Download',
        content: <DownloadTemplet />,
    },
    {
        title: 'Upload',
        content: <UploadTemplet />,
    },
    {
        title: 'Result',
        content: 'Last-content',
    },
];

const Index = () => {

    const [current, setCurrent] = useState(0)

    const handleNext = () => {
        // const current = this.state.current + 1;
        // this.setState({ current });
        setCurrent(prevCurrent => prevCurrent + 1)
    }

    const handlePrev = () => {
        // const current = this.state.current - 1;
        // this.setState({ current });
        setCurrent(prevCurrent => prevCurrent - 1)
    }

    return (
        <div style={{padding: 25}}>
            <Steps current={current}>
                {steps.map(item => (
                    <Step key={item.title} title={item.title} />
                ))}
            </Steps>
            <div className="steps-action" style={{marginTop: 10, marginBottom: 25, textAlign: 'end'}}>
                {current > 0 && (
                    <Button style={{ marginLeft: 8 }} onClick={handlePrev}>
                        Previous
                    </Button>
                )}
                {current < steps.length - 1 && (
                    <Button style={{marginLeft: 5}} type="primary" onClick={handleNext}>
                        Next
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button style={{marginLeft: 5}} type="primary" onClick={() => message.success('Processing complete!')}>
                        Done
                    </Button>
                )}
            </div>
            <div className="steps-content">{steps[current].content}</div>
            
        </div>
    );
};

export default Index;