# Heatmap

##### A React frontend application to create a heatmap calendar developed with react and material ui. Heatmap is a calendar based heatmap. It show the amount of activity for a given calendar day, relative to other days in the calendar.
![heatmap](https://user-images.githubusercontent.com/41167286/133744642-35bbe5cd-4a89-46ad-9a58-3d1d3fc338e5.PNG)

#### The tech stack includes:

- React/Redux
- material ui

## Getting Started

Input Heat Map data:

MyHeatMap component required a dataset. The datastructure should be be like below. Date and Count fields are mandatory. The date format should be yyyy/mm/dd
[
 {"date": "2021/6/16","count": 44636},
 {"date": "2021/6/17","count": 46443}
 ]

Color Values: 
Color values '#eee', '#c6e48b', '#7bc96f', '#239a3b', '#196127' are used in the heatmap. The color selection works based on the data count value. 

##### The example application uses ***Finland daily_vaccinations*** date and count data from world COVID-19 datasets. The dataset is avilable here https://www.kaggle.com/gpreda/covid-world-vaccination-progress

Running :
Checkout the repo.
* Install the required packages with `yarn` .
$My-heat-map>yarn
$My-heat-map>yarn start

- Open http://localhost:3000 and you should see the app homepage!
