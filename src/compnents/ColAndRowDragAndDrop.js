/* eslint-disable no-use-before-define */
import { Table } from 'antd';
import update from 'immutability-helper';
import React, { useCallback, useRef, useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ReactDragListView from "react-drag-listview";
import { Resizable } from "react-resizable";
import './Demo.css';

const ResizableTitle = (props) => {
    const { onResize, width, ...restProps } = props;
  
    if (!width) {
      return <th {...restProps} />;
    }
  
    return (
      <Resizable
        width={width}
        height={0}
        handle={
          <span
            className="react-resizable-handle"
            onClick={(e) => {
              e.stopPropagation();
            }}
          />
        }
        onResize={onResize}
        draggableOpts={{ enableUserSelectHack: false }}
      >
        <th {...restProps} />
      </Resizable>
    );
};



const ColAndRowDragAndDrop = () => {
    const [data, setData] = useState([
        {
          key: "1",
          name: "Boran",
          gender: "male",
          age: "12",
          address: "New York"
        },
        {
          key: "2",
          name: "JayChou",
          gender: "male",
          age: "38",
          address: "TaiWan"
        },
        {
          key: "3",
          name: "Lee",
          gender: "female",
          age: "22",
          address: "BeiJing"
        },
        {
          key: "4",
          name: "ChouTan",
          gender: "male",
          age: "31",
          address: "HangZhou"
        },
        {
          key: "5",
          name: "AiTing",
          gender: "female",
          age: "22",
          address: "Xi’An"
        }
      ]);
    const [columns, setColumns] = useState( [
        {
          title: <span className="dragHandler">Key</span>,
          dataIndex: "key",
          render: (text) => <span>{text}</span>,
          width: 50
        },
        {
          title: <span style={{cursor: 'pointer', color: 'blue'}} className="dragHandler">Name</span>,
          dataIndex: "name",
          width: 200
        },
        {
          title: <span className="dragHandler">Gender</span>,
          dataIndex: "gender",
          width: 100
        },
        {
          title: <span className="dragHandler">Age</span>,
          dataIndex: "age",
          width: 100
        },
        {
          title: <span className="dragHandler">Address</span>,
          dataIndex: "address"
        }
      ]);
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

    const moveRow = useCallback((dragIndex, hoverIndex) => {
        const dragRow = data[dragIndex];
        setData(update(data, {
            $splice: [
                [dragIndex, 1],
                [hoverIndex, 0, dragRow],
            ]
        }))
    }, [data])

    const dragProps = {
        onDragEnd(fromIndex, toIndex) {
          const tColumns = [...columns];
          const item = tColumns.splice(fromIndex, 1)[0];
          tColumns.splice(toIndex, 0, item);
          setColumns(tColumns)
        },
        nodeSelector: "th",
        handleSelector: ".dragHandler",
        ignoreSelector: "react-resizable-handle"
    };

    const handleResize = (index) => (e, { size }) => {
        console.log(index)
        setColumns((prevState) => {
            console.log(prevState, '<== new arif')
            const nextColumns = [...prevState];
            nextColumns[index] = {
                ...nextColumns[index],
                width: size.width
            };
            return nextColumns;
        })
    };

    const components = {
        header: {
            cell: ResizableTitle
        },
        body: {
            row: DragableBodyRow,
        }
    }

    const fColumns = columns.map((col, index) => ({
        ...col,
        onHeaderCell: (column) => ({
            width: column.width,
            onResize: handleResize(index)
        })
    }));

    return (
        <div style={{
            width: '95%',
            margin: 'auto'
        }}>
            
            <DndProvider backend={HTML5Backend}>
                <ReactDragListView.DragColumn {...dragProps}>
                    <Table columns={fColumns} dataSource={data} components={components} onRow={(record, index) =>({
                        index,
                        moveRow,
                    })} />
                </ReactDragListView.DragColumn>
            </DndProvider>
        </div>
    );
};

export default ColAndRowDragAndDrop;