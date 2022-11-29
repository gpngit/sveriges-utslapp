
//CSS
import styled, {css} from "styled-components";
import { flex, colors, font, fonts } from '../../styles/partials'

const ChartOptions2 = () => {
  const options = {
    // indexAxis: 'y', om den ska ligga horisontellt
    maintainAspectRatio: false,
    responsive: true,
    interaction: {
        intersect: false,
    },
    scales: {
      y: { 
        max: 120000,
        stacked: true,
        ticks:{
          display: true,
          color: colors.secondary,
          font:{
            size: '12px',
            family: font.main,
          },
          stepSize: 20000,
        },
        grid: {
          display: true
        }
      },
      x: {
        display: true,           
        grid: {
          display: false
        },
        ticks:{
          color: colors.secondary,
          font:{
            size: '12px',
            family: font.main,
          }
        }
      }
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        align: 'end',
        anchor: 'end',
        color: colors.secondary,
        formatter: function(value, context) {
          let datasets = context.chart.data.datasets
          let stackedDatasets = datasets.filter(ds => ds.stacked === true)
          if (context.datasetIndex !== 2 && context.dataset.stacked){
            return null
          } else if (context.datasetIndex === 2) {
              if (datasets[0].stacked){
                return ['Utsläpp', `${Math.round(stackedDatasets[0].data[0] + stackedDatasets[1].data[0])} kt CO2`]
              } else {
                return ['Upptag / kollagring', `-${Math.round(stackedDatasets[0].data[0] + stackedDatasets[1].data[0])} kt CO2`]
              }
          } else if (context.datasetIndex === 0) {
            return ['Utsläpp', `${Math.round(value)} kt CO2`]
          } else if (context.datasetIndex === 1) {
            return ['Upptag / kollagring', `-${Math.round(value)} kt CO2`]
          }
        },
        font: {
          family: font.main,
          size: "18px",
        },
      },
      tooltip: {
        enabled: false,
        mode: 'index',
        intersect: false,
        backgroundColor: colors.secondary,
        titleFont: {
          family: font.main,
          size: "18px",
        },
        titleColor: 'white', //default(onödig?)
        titleAlign: 'left', //default(onödig?)
        titleMarginBottom: 10,
        bodyFont: {
          family: font.main,
          size: '14px'
        },
        bodyColor: 'white',  //default(onödig?)
        bodyAlign: 'left', //default(onödig?)
        bodySpacing: 10,
        padding: 20,
        caretPadding: 10, //avstång från pinkt på graf
        caretSize: 10, //storlek på triangel 
        cornerRadius: 10,
        boxWidth: 16,
        boxHeight: 16,
        boxPadding: 10, //avstånd till text
        borderWidth: 0
      }
   }
  }
      
    return options
}

export default ChartOptions2