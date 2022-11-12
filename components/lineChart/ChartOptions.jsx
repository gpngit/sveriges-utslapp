const ChartOptions = () => {

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
              display: false,
              position: 'top',
              align: "center",
              labels:{
                  boxHeight: 20,
                  color: 'black',
                  font:{
                      size: '12px',
                      family: "Noto Sans",
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
                family: "Noto Sans",
              },
              stepSize: 10000,
            },
            min: 0,
            max: 120000,
            grid: {
              display: false
            }
          },
          x: {             
            grid: {
              display: false
            },
            ticks:{
              color: 'black',
              font:{
                size: '12px',
                family: "Noto Sans",
              }
            }
          }
        }
      }
      
    return options
}

export default ChartOptions