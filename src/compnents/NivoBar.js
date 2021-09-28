import { ResponsiveBar } from "@nivo/bar";
import React from "react";

const NivoBar = () => {
  const data = [
    {
      country: "AD",
      "hot dog": 164,
    //   "hot dogColor": "hsl(201, 52%, 77%)",
      burger: 195,
    //   burgerColor: "hsl(201, 52%, 77%)",
      sandwich: 119,
    //   sandwichColor: "hsl(201, 52%, 77%)",
      kebab: 20,
    //   kebabColor: "hsl(201, 52%, 77%)",
      fries: 187,
    //   friesColor: "hsl(201, 52%, 77%)",
      donut: 170,
    //   donutColor: "hsl(201, 52%, 77%)",
    },
    {
      country: "AE",
      "hot dog": 118,
    //   "hot dogColor": "hsl(201, 52%, 77%)",
      burger: 29,
    //   burgerColor: "hsl(201, 52%, 77%)",
      sandwich: 153,
    //   sandwichColor: "hsl(201, 52%, 77%)",
      kebab: 88,
    //   kebabColor: "hsl(201, 52%, 77%)",
      fries: 103,
    //   friesColor: "hsl(201, 52%, 77%)",
      donut: 99,
    //   donutColor: "hsl(201, 52%, 77%)",
    },
    {
      country: "AF",
      "hot dog": 10,
    //   "hot dogColor": "hsl(201, 52%, 77%)",
      burger: 50,
    //   burgerColor: "hsl(201, 52%, 77%)",
      sandwich: 25,
    //   sandwichColor: "hsl(201, 52%, 77%)",
      kebab: 41,
    //   kebabColor: "hsl(201, 52%, 77%)",
      fries: 183,
    //   friesColor: "hsl(201, 52%, 77%)",
      donut: 31,
    //   donutColor: "hsl(201, 52%, 77%)",
    },
    {
      country: "AG",
      "hot dog": 90,
    //   "hot dogColor": "hsl(201, 52%, 77%)",
      burger: 127,
    //   burgerColor: "hsl(201, 52%, 77%)",
      sandwich: 39,
    //   sandwichColor: "hsl(201, 52%, 77%)",
      kebab: 61,
    //   kebabColor: "hsl(201, 52%, 77%)",
      fries: 6,
    //   friesColor: "hsl(201, 52%, 77%)",
      donut: 77,
    //   donutColor: "hsl(201, 52%, 77%)",
    },
    {
      country: "AI",
      "hot dog": 35,
    //   "hot dogColor": "hsl(201, 52%, 77%)",
      burger: 6,
    //   burgerColor: "hsl(201, 52%, 77%)",
      sandwich: 192,
    //   sandwichColor: "hsl(201, 52%, 77%)",
      kebab: 48,
    //   kebabColor: "hsl(201, 52%, 77%)",
      fries: 168,
    //   friesColor: "hsl(201, 52%, 77%)",
      donut: 49,
    //   donutColor: "hsl(201, 52%, 77%)",
    },
    {
      country: "AL",
      "hot dog": 108,
    //   "hot dogColor": "hsl(201, 52%, 77%)",
      burger: 110,
    //   burgerColor: "hsl(201, 52%, 77%)",
      sandwich: 76,
    //   sandwichColor: "hsl(201, 52%, 77%)",
      kebab: 101,
    //   kebabColor: "hsl(201, 52%, 77%)",
      fries: 22,
    //   friesColor: "hsl(201, 52%, 77%)",
      donut: 54,
    //   donutColor: "hsl(201, 52%, 77%)",
    },
    {
      country: "AM",
      "hot dog": 140,
    //   "hot dogColor": "hsl(201, 52%, 77%)",
      burger: 131,
    //   burgerColor: "hsl(201, 52%, 77%)",
      sandwich: 199,
    //   sandwichColor: "hsl(201, 52%, 77%)",
      kebab: 135,
    //   kebabColor: "hsl(201, 52%, 77%)",
      fries: 62,
    //   friesColor: "hsl(201, 52%, 77%)",
      donut: 79,
    //   donutColor: "hsl(201, 52%, 77%)",
    },
  ];

  return (
    <div style={{ width: "100%", height: "350px" }}>
      <ResponsiveBar
        data={data}
        keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        valueFormat={{ format: "", enabled: false }}
        colors="hsl(201, 52%, 77%)"
        // defs={[
        //   {
        //     id: "dots",
        //     type: "patternDots",
        //     background: "inherit",
        //     color: "#38bcb2",
        //     size: 4,
        //     padding: 1,
        //     stagger: true,
        //   },
        //   {
        //     id: "lines",
        //     type: "patternLines",
        //     background: "inherit",
        //     color: "#eed312",
        //     rotation: -45,
        //     lineWidth: 6,
        //     spacing: 10,
        //   },
        // ]}
        // fill={[
        //   {
        //     match: {
        //       id: "fries",
        //     },
        //     id: "dots",
        //   },
        //   {
        //     match: {
        //       id: "sandwich",
        //     },
        //     id: "lines",
        //   },
        // ]}
        borderWidth={0.25}
        borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "country",
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "food",
          legendPosition: "middle",
          legendOffset: -40,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default NivoBar;
