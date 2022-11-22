//CSS
import { colors, font } from '../../styles/partials'

const ChartOptions = (emissions) => {

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          y: { 
            stacked: true,
            display: true,
            ticks:{
              color: colors.secondary,
              font:{
                size: '12px',
                family: font.main,
              },
              stepSize: 20000,
            },
            min: 0,
            max: 120000,
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