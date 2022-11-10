// importera chartjs-plugin-datalabels ?????

const ChartOptions = () => {

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          datalabels: {
            display: true,
            color: 'black',
            anchor: "end",
            align: "end",
            font: {
              size: '12px',
              family: " Noto Sans",
              weight: 600,
            }
          },
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
            ticks:{
              color: 'black',
              font:{
                size: '12px',
                family: " Noto Sans",
              },
              stepSize:10000,
            },
            min: 0,
            max: 80000,
            grid: {
              display: true,
              color: 'black',
            }
          },
          x: {             
            grid: {
              display: false,
              color: 'black',
            },
            ticks:{
              display: false,
            }
          }
        }
      }
      
    return options
}

export default ChartOptions