
# Calendar Heatmap 

# Introduction:
  MyHeatmap is a calendar based heatmap. It show the amount of activity for a given calendar day, relative to other days in the calendar.

Screen Shot:
![heatmap](https://user-images.githubusercontent.com/41167286/133745332-f47f2e50-52fd-4712-9461-551e177a7506.PNG)
# Component:
  The heat map 'MyHeatMap' component is reusable. The conmponent 'MyHeatMap' is located under .src/components

# Tech Stack:
  react
  material-ui

Basic Usage example:

```
import React from "react";
import MyHeatMap from "./components/MyHeatMap";
 const testHeatData = [
    	{
            "date": "2021/6/16",
            "count": 44636
        },
        {
            "date": "2021/6/17",
            "count": 46443
        },
        {
            "date": "2021/6/18",
            "count": 63726
        },
        {
            "date": "2021/6/19",
            "count": 60477
        },
        {
            "date": "2021/6/20",
            "count": 53263
    	}
  ];

function App() {
  return (
    <div className="App">
      <MyHeatMap heatData={testHeatData} />
    </div>
  );
}
export default App;

```
# Input Heatdata:

MyHeatMap component required a dataset.The datastructure shoulbe be like below. date and count fields are mandatory. the date format should be yyyy/mm/dd

```
[
 {"date": "2021/6/16","count": 44636},
 {"date": "2021/6/17","count": 46443}
 ]

```

# Color: 
  These '#eee', '#c6e48b', '#7bc96f', '#239a3b', '#196127' colors are used in the heatmap. The color selection works based on the data count value. 

# Example: 
  The example application is uses Finland daily_vaccinations date and count data from world COVID-19 datasets. The dataset is avilable here https://www.kaggle.com/gpreda/covid-world-vaccination-progress

# Getting started :
  Checkout the repo.

```
$My-heat-map>yarn
$My-heat-map>yarn start

```
Open http://localhost:3000 and you should see the page!

