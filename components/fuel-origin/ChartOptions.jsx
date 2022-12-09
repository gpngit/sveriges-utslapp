//CSS
import { colors, font } from '../../styles/partials'

const ChartOptions = () => {

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        cutout: '30%',
        layout: {
          padding: 20,
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
            enabled: false,
            mode: 'index',
            intersect: false,
            backgroundColor: colors.secondary,
            titleFont: {
              family: font.main,
              size: "12px",
            },
            titleMarginBottom: 10,
            bodyFont: {
              family: font.main,
              size: '12px'
            },
            bodySpacing: 10,
            padding: 10,
            caretPadding: 5, //avstång från pinkt på graf
            caretSize: 10, //storlek på triangel 
            cornerRadius: 10,
            boxWidth: 20,
            boxHeight: 20,
            boxPadding: 5, //avstånd till text
            borderWidth: 0
          }
      }
    }
      
    return options
}

export default ChartOptions