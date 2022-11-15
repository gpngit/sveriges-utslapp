const ChartOptions = (emissions) => {

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        layout: {
          padding: {
            left: 50,
            top: 50
          }
        },
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
            display: true,
            ticks:{
              beginAtZero: true,
              color: 'black',
              font:{
                size: '12px',
                family: "Noto Sans",
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