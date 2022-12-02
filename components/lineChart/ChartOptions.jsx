//CSS
import { colors, font } from '../../styles/partials'

const ChartOptions = (emissions,) => {
  
    const yearsOfData = [... new Set(emissions.map(emission => Number(emission.year)))]
    const firstYear = yearsOfData[0]
    const mostRecentYear = yearsOfData[yearsOfData.length -1]
    // const currentYear = new Date().getFullYear()
    // const totalEmissions1990 = 71441.6+21027.9

    const yearsForXAxis = []
    for (let i=firstYear; i<=2030; i++){
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
                    size: '16px'
                  },
                  xValue: 15,
                }
              },
              // line2030: {
              //   adjustScaleRange: true,
              //   drawTime: 'afterDatasetsDraw',
              //   type: 'line',
              //   yMin: totalEmissions1990*0.37,
              //   yMax: totalEmissions1990*0.37,
              //   borderColor: colors.border,
              //   borderWidth: 2,
              //   borderDash: [5],
              //   label: {
              //     position: `${(100/55)*40}%`,
              //     yAdjust: -20,
              //     display: true,
              //     content: ['Etappmål 2030', `${2030-currentYear} år kvar`],
              //     backgroundColor: 'transparent',
              //     color: colors.secondary,
              //     font: {
              //       family: font.main,
              //       size: '10px',
              //       weight: 'normal',
              //       lineHeight: 1.2,
              //     },
              //   }
              // },
              // line2040: {
              //   adjustScaleRange: true,
              //   drawTime: 'afterDatasetsDraw',
              //   type: 'line',
              //   yMin: totalEmissions1990*0.25,
              //   yMax: totalEmissions1990*0.25,
              //   borderColor: colors.border,
              //   borderWidth: 2,
              //   borderDash: [5],
              //   label: {
              //     position: `${(100/55)*50}%`,
              //     yAdjust: -12,
              //     display: true,
              //     content: ['Etappmål 2040', `${2040-currentYear} år kvar`],
              //     backgroundColor: 'transparent',
              //     color: colors.secondary,
              //     font: {
              //       family: font.main,
              //       size: '10px',
              //       weight: 'normal',
              //       lineHeight: 1.2,
              //     },
              //   }
              // },
              // line2045: {
              //   adjustScaleRange: true,
              //   drawTime: 'afterDatasetsDraw',
              //   type: 'line',
              //   yMin: 0,
              //   yMax: 0,
              //   borderColor: colors.border,
              //   borderWidth: 4,
              //   borderDash: [5],
              //   label: {
              //     position: '100%',
              //     yAdjust: 5,
              //     xAdjust: 10,
              //     display: true,
              //     content: ['Nettonoll 2045', `${2045-currentYear} år kvar`],
              //     backgroundColor: 'transparent',
              //     color: colors.secondary,
              //     textAlign: 'end',
              //     font: {
              //       family: font.main,
              //       size: '10px',
              //       weight: 'normal',
              //       lineHeight: 1.2,
              //     },
              //   }
              // }
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