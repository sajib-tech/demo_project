/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-anonymous-default-export */
import ProTable from '@ant-design/pro-table';
import { ConfigProvider } from 'antd';
import enUS from 'antd/lib/locale/en_US';
import update from 'immutability-helper';
import React, { useCallback, useRef, useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';


const type = 'DragableBodyRow';

const DragableBodyRow = ({index, moveRow, className, style, ...restProps}) => {
    const ref = useRef();
    const [{isOver, dropClassName}, drop] = useDrop(() =>({
        accept: type,
        collect: (monitor) => {
            const {index: dragIndex} = monitor.getItem() || {};
            if(dragIndex === index) {
                return {}
            }
            return {
                isOver: monitor.isOver(),
                dropClassName: dragIndex < index ? 'drop-over-downward' : 'drop-over-upward',
            };
        },
        drop: (item) => {
            moveRow(item.index, index)
        }
    }), [index]);
    const [, drag] = useDrag(() => ({
        type,
        item: {index},
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    }), [index]);
    drop(drag(ref));
    return(
        <tr 
            ref={ref}
            className={`${className}${isOver ? dropClassName : ''}`}
            style={{cursor: 'move', ...style}}
            {...restProps}
        >
        </tr>
    )
};

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age'
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address'
    },
];
export default () => {
    const [data, setData] = useState([
        {
            key: '1',
            name: 'James',
            age: 26,
            address: 'India'
        },
        {
            key: '2',
            name: 'John',
            age: 29,
            address: 'USA'
        },
        {
            key: '3',
            name: 'Alex',
            age: 32,
            address: 'UK'
        },
    ]);
    const components = {
        body: {
            row: DragableBodyRow,
        }
    };

    const moveRow = useCallback((dragIndex, hoverIndex) => {
        const dragRow = data[dragIndex];
        setData(update(data, {
            $splice: [
                [dragIndex, 1],
                [hoverIndex, 0, dragRow],
            ]
        }))
    }, [data])
    const actionRef = useRef();
    return (
        <ConfigProvider locale={enUS}>
            <DndProvider backend={HTML5Backend}>
                <ProTable 
                    columns={columns} 
                    dataSource={data} 
                    actionRef={actionRef}
                    components={components}
                    search={false}
                    options={{ fullScreen: false, reload: true, setting: true }}
                    onRow={(record, index) =>({
                        index,
                        moveRow,
                    })}
                />
            </DndProvider>
        </ConfigProvider>
    );
};