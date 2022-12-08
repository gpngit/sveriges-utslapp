//CSS
import { colors, font } from '../../styles/partials'

const ChartOptions = (emissions,) => {
  
    const yearsOfData = [... new Set(emissions.map(emission => Number(emission.year)))]
    const firstYear = yearsOfData[0]
    const mostRecentYear = yearsOfData[yearsOfData.length -1]

    const yearsForXAxis = []
    for (let i=firstYear; i<=(mostRecentYear+10); i++){
      yearsForXAxis.push(i)
    }

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          y: { 
            min: 0,
            stacked: true,
            display: true,
            ticks:{
              color: colors.secondary,
              font:{
                size: '12px',
                family: font.main,
              },
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
            ticks: {
              callback: (value, index, values) => {
                if (yearsForXAxis[index] === firstYear || yearsForXAxis[index] === mostRecentYear){
                  return yearsForXAxis[index]
                  }
              },
              stepSize: 10000,
              color: colors.secondary,
              font:{
                size: '16px',
                weight: 'bold',
                family: font.main,
              }
            }
          }
        },
        plugins: {
          annotation: {
            annotations: {
              testLabel: (chart) => {
                let labelContent = ['FOSSIL + BIOGEN CO2']
                if (chart.chart?._sortedMetasets?.length){
                  let datasets = chart.chart._sortedMetasets
                  if (datasets[0].hidden){
                    labelContent = ['BIOGEN CO2']
                  } else if (datasets[1].hidden){
                    labelContent = ['FOSSIL CO2']
                  }
                }
                return {
                  type: 'label',
                  content: labelContent,
                  color: 'white',
                  font: {
                    family: font.main,
                    size: '18px'
                  },
                  xValue: 15,
                  yValue:20000
                }
              },
            },
          },
          legend: {
            display: false,
          },
          tooltip: {
            enabled: true,
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

export default ChartOptions