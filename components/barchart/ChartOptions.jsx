// importera chartjs-plugin-datalabels ?????

const ChartOptions = () => {

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          // datalabels: {
          //   display: true,
          //   color: 'black',
          //   anchor: "end",
          //   align: "end",
          //   font: {
          //     size: '12px',
          //     family: " Noto Sans",
          //     weight: 600,
          //   }
          // },
            legend: {
                display: true,
                position: 'bottom',
                align: "center",
                labels:{
                    boxHeight: 10,
                    color: 'black',
                    font:{
                        size: '12px',
                        family: " Noto Sans",          
                        weight: 500,
                    }
                } 
            }
        },
        scales: {
          y: { 
            // stacked: true,
            ticks:{
              color: 'black',
              font:{
                size: '12px',
                family: " Noto Sans",
              },
              stepSize: 5000,
            },
            min: 0,
            max: 25000,
            grid: {
              display: true,
              color: 'black',
            }
          },
          x: {             
            grid: {
              display: true,
              color: 'black',
            },
            ticks:{
              display: true,
            }
          }
        }
      }
      
    return options
}

export default ChartOptions