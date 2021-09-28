import { Line } from '@nivo/line';
import React, { useState } from 'react';

const NivoLine = () => {
    const data = [
        {
          "id": "japan",
          "color": "hsl(168, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 28
            },
            {
              "x": "helicopter",
              "y": 112
            },
            // {
            //   "x": "boat",
            //   "y": 0
            // },
            {
              "x": "train",
              "y": 177
            },
            {
              "x": "subway",
              "y": 190
            },
            {
              "x": "bus",
              "y": 147
            },
            {
              "x": "car",
              "y": 95
            },
            {
              "x": "moto",
              "y": 70
            },
            {
              "x": "bicycle",
              "y": 48
            },
            {
              "x": "horse",
              "y": 170
            },
            {
              "x": "skateboard",
              "y": 4
            },
            {
              "x": "others",
              "y": 186
            }
          ]
        },
        // {
        //   "id": "france",
        //   "color": "hsl(266, 70%, 50%)",
        //   "data": [
        //     {
        //       "x": "plane",
        //       "y": 44
        //     },
        //     {
        //       "x": "helicopter",
        //       "y": 228
        //     },
        //     {
        //       "x": "boat",
        //       "y": 77
        //     },
        //     {
        //       "x": "train",
        //       "y": 221
        //     },
        //     {
        //       "x": "subway",
        //       "y": 59
        //     },
        //     {
        //       "x": "bus",
        //       "y": 273
        //     },
        //     {
        //       "x": "car",
        //       "y": 166
        //     },
        //     {
        //       "x": "moto",
        //       "y": 252
        //     },
        //     {
        //       "x": "bicycle",
        //       "y": 241
        //     },
        //     {
        //       "x": "horse",
        //       "y": 16
        //     },
        //     {
        //       "x": "skateboard",
        //       "y": 170
        //     },
        //     {
        //       "x": "others",
        //       "y": 67
        //     }
        //   ]
        // },
        // {
        //   "id": "us",
        //   "color": "hsl(6, 70%, 50%)",
        //   "data": [
        //     {
        //       "x": "plane",
        //       "y": 277
        //     },
        //     {
        //       "x": "helicopter",
        //       "y": 200
        //     },
        //     {
        //       "x": "boat",
        //       "y": 122
        //     },
        //     {
        //       "x": "train",
        //       "y": 135
        //     },
        //     {
        //       "x": "subway",
        //       "y": 220
        //     },
        //     {
        //       "x": "bus",
        //       "y": 118
        //     },
        //     {
        //       "x": "car",
        //       "y": 104
        //     },
        //     {
        //       "x": "moto",
        //       "y": 211
        //     },
        //     {
        //       "x": "bicycle",
        //       "y": 42
        //     },
        //     {
        //       "x": "horse",
        //       "y": 122
        //     },
        //     {
        //       "x": "skateboard",
        //       "y": 13
        //     },
        //     {
        //       "x": "others",
        //       "y": 256
        //     }
        //   ]
        // },
        // {
        //   "id": "germany",
        //   "color": "hsl(160, 70%, 50%)",
        //   "data": [
        //     {
        //       "x": "plane",
        //       "y": 70
        //     },
        //     {
        //       "x": "helicopter",
        //       "y": 294
        //     },
        //     {
        //       "x": "boat",
        //       "y": 51
        //     },
        //     {
        //       "x": "train",
        //       "y": 86
        //     },
        //     {
        //       "x": "subway",
        //       "y": 15
        //     },
        //     {
        //       "x": "bus",
        //       "y": 82
        //     },
        //     {
        //       "x": "car",
        //       "y": 94
        //     },
        //     {
        //       "x": "moto",
        //       "y": 19
        //     },
        //     {
        //       "x": "bicycle",
        //       "y": 70
        //     },
        //     {
        //       "x": "horse",
        //       "y": 213
        //     },
        //     {
        //       "x": "skateboard",
        //       "y": 90
        //     },
        //     {
        //       "x": "others",
        //       "y": 75
        //     }
        //   ]
        // },
        // {
        //   "id": "norway",
        //   "color": "hsl(286, 70%, 50%)",
        //   "data": [
        //     {
        //       "x": "plane",
        //       "y": 172
        //     },
        //     {
        //       "x": "helicopter",
        //       "y": 30
        //     },
        //     {
        //       "x": "boat",
        //       "y": 21
        //     },
        //     {
        //       "x": "train",
        //       "y": 263
        //     },
        //     {
        //       "x": "subway",
        //       "y": 119
        //     },
        //     {
        //       "x": "bus",
        //       "y": 210
        //     },
        //     {
        //       "x": "car",
        //       "y": 115
        //     },
        //     {
        //       "x": "moto",
        //       "y": 127
        //     },
        //     {
        //       "x": "bicycle",
        //       "y": 275
        //     },
        //     {
        //       "x": "horse",
        //       "y": 84
        //     },
        //     {
        //       "x": "skateboard",
        //       "y": 203
        //     },
        //     {
        //       "x": "others",
        //       "y": 59
        //     }
        //   ]
        // }
      ]
    const [pointValue, setPointValue] = useState(null)
    // console.log(pointValue, 'pointValue')

    // const data2 = generateDrinkStats(18)
    // console.log(data2)
    const commonProperties = {
      width: 900,
      height: 400,
      margin: { top: 20, right: 20, bottom: 60, left: 80 },
      enableSlices: false,
  }
    

    return (
        <div  style={{ height: 300, marginBottom: 30 }}>
            {/* <h1>Nivo line</h1> */}
            {/* <ResponsiveLine
                // {...commonProperties}
                curve="monotoneX"
                data={data}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: 'point' }}
                yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
                yFormat=" >-.2f"
                axisTop={null}
                axisRight={null}
                onClick={(point, Event) => console.log(point)}
                axisBottom={{
                    orient: 'bottom',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'transportation',
                    legendOffset: 36,
                    legendPosition: 'middle'
                }}
                axisLeft={{
                    orient: 'left',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'count',
                    legendOffset: -40,
                    legendPosition: 'middle'
                }}
                pointSize={10}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabelYOffset={-12}
                useMesh={true}
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 100,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemDirection: 'left-to-right',
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: 'circle',
                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
            /> */}
            <Line
            {...commonProperties}
            curve="monotoneX"
            data={
              [
                {
                    id: 'fake corp. A',
                    data: [
                        { x: 0, y: 7 },
                        { x: 1, y: 5 },
                        { x: 2, y: 11 },
                        { x: 3, y: 9 },
                        { x: 4, y: 13 },
                        { x: 7, y: 16 },
                        { x: 9, y: 12 },
                        { x: 31, y: 16 },
                    ],
                },
            ]
            // data
          }
          
          // margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{
                type: 'linear',
                min: 0,
                max: 31,
            }}
            axisLeft={{
                legend: 'linear scale',
                legendOffset: 12,
            }}
            axisBottom={{
                legend: 'linear scale',
                legendOffset: -12,
            }}
        />
        </div>
    );
};

export default NivoLine;