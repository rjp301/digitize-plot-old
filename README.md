# Digitize Plot

## Introduction

Have you ever needed to convert data from a graphical format and found yourself painstakingly entering data in a spreadsheet while zooming in and out on the plot image?

Enter [**digitizeplot.com**](https://digitizeplot.com/).

This web app allows users to upload an image of a plot, calibrate an x and y scale, drop as many points as they would like on it, then export those points to CSV with accurate coordinates.

## How it Works

There are many instances where data is available in only a chart format with an x and y axis and minimal labels.

![example plot](/images/BPL220K_24ft.png)

This app allows users to upload an image of that chart, position two calibration points per axis, then place as many data points as they would like on the plot and export those data points. 

![example plot in app](https://github.com/rjp301/digitize-plot/blob/d6edcbf71fd572acbfa66e648f7173761f457fd7/docs/digitize_plot_app.png)


## How I Built It

This single-page React application is written in Typescript and hosted on GitHub Pages. I made use of several libraries such as react-csv, react-konva (for the canvas) and react-dropzone.

## Future Plans

In the future I would consider adding options for different axis scales such as logarithmic and datetime. As well I would like to improve the general fit and finish for a better user experience.
