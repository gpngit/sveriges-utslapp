//CSS
import { colors, font } from '../../styles/partials'

const ChartOptions = () => {

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        cutout: '30%',
        layout: {
          padding: 30,
        },
        scales: {
          y: { 
            display: false,
          },
          x: {  
            display: false,           
          }
        },
        plugins: {
          legend: {
            display: false,
            labels: {
              color: 'black',
              font: {
                family: font.main,
              },
            },
          },
          tooltip: {
            enabled: true,
            mode: 'index',
            intersect: false,
            backgroundColor: colors.secondary,
            titleFont: {
              family: font.main,
              size: "14px",
            },
            titleColor: 'white', //default(onödig?)
            titleAlign: 'left', //default(onödig?)
            titleMarginBottom: 10,
            bodyFont: {
              family: font.main,
              size: '12px'
            },
            bodyColor: 'white',  //default(onödig?)
            bodyAlign: 'left', //default(onödig?)
            bodySpacing: 10,
            padding: 20,
            caretPadding: 5, //avstång från pinkt på graf
            caretSize: 10, //storlek på triangel 
            cornerRadius: 10,
            boxWidth: 12,
            boxHeight: 16,
            boxPadding: 10, //avstånd till text
            borderWidth: 0
          }
       }
      }
      
    return options
}

export default ChartOptions