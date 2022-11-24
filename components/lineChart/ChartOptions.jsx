//CSS
import { colors, font } from '../../styles/partials'

const ChartOptions = (emissions) => {

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          y: { 
            min: 0,
            max: (chart) => {
              let {_sortedMetasets} = chart.chart
              let highestValue = 0
              let visibleDatasets = _sortedMetasets.filter(dataset => !dataset.hidden)
              visibleDatasets.forEach(dataset => {
                let valuesArray = dataset._parsed
                let highestValueInDataset = Math.max(...valuesArray.map(val => val.y))
                highestValue += highestValueInDataset
              })
              let rounded = Math.ceil(highestValue/10000)*10000
              return rounded
            },
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
          annotation: {
            annotations: {
              line2030: {
                adjustScaleRange: true,
                drawTime: 'afterDatasetsDraw',
                type: 'line',
                yMin: 34213,
                yMax: 34213,
                borderColor: colors.border,
                borderWidth: 5,
                borderDash: [5],
                label: {
                  position: 'center',
                  display: true,
                  content: 'Sveriges klimatmål etapp 2030',
                  padding: {
                    top: 10,
                    right: 20,
                    bottom: 10,
                    left: 20
                  },
                  backgroundColor: 'rgba(255,255,255,.8)',
                  color: 'black',
                  font: {
                    family: font.main,
                    size: '14px'
                  },
                }
              },
              line2040: {
                adjustScaleRange: true,
                drawTime: 'afterDatasetsDraw',
                type: 'line',
                yMin: 23117,
                yMax: 23117,
                xAdjust: -100,
                borderColor: colors.border,
                borderWidth: 5,
                borderDash: [5],
                label: {
                  position: 'center',
                  display: true,
                  content: 'Sveriges klimatmål etapp 2040',
                  padding: {
                    top: 10,
                    right: 20,
                    bottom: 10,
                    left: 20
                  },
                  backgroundColor: 'rgba(255,255,255,.8)',
                  color: 'black',
                  font: {
                    family: font.main,
                    size: '14px'
                  },
                }
              }
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