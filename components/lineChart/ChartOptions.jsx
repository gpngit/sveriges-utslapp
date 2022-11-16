const ChartOptions = (emissions) => {

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        layout: {
          padding: {
            left: 50,
            right: 50
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
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: true,
            mode: 'index',
            intersect: false,
          }
       }
      }
      
    return options
}

export default ChartOptions