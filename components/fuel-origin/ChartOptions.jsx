//CSS
import { colors, font } from '../../styles/partials'

const ChartOptions = (emissions) => {

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        cutout: '30%',
        layout: {
          padding: 50,
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
            display: true,
            position: () => {
              if (window.innerWidth < 650){
                return 'bottom'
              } else {
                return 'right'
              }
            },
            align: () => {
              if (window.innerWidth < 650){
                return 'start'
              } else {
                return 'center'
              }
            },
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