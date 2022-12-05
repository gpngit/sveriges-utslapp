import { colors, font } from '../../styles/partials'

const ChartOptions = () => {
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    interaction: {
        intersect: false,
    },
    scales: {
      y: { 
        stacked: true,
        ticks:{
          display: true,
          color: colors.secondary,
          font:{
            size: '12px',
            family: font.main,
          },
          stepSize: 20000,
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
      datalabels: {
        align: 'center',
        anchor: 'center',
        color: 'white',
        formatter: function(value, context) {
          let datasets = context.chart.data.datasets
          let stackedDatasets = datasets.filter(ds => ds.stacked === true)
          if (context.datasetIndex !== 2 && context.dataset.stacked){
            return null
          } else if (context.datasetIndex === 2) {
              if (datasets[0].stacked){
                return ['Totala', 'utsläpp','', `${Math.round(stackedDatasets[0].data[0] + stackedDatasets[1].data[0])}`]
              } else {
                return ['Potentiellt','upptag','', `${Math.round(stackedDatasets[0].data[0] + stackedDatasets[1].data[0])}`]
              }
          } else if (context.datasetIndex === 0) {
            return ['Utsläpp','', `${Math.round(value)}`]
          } else if (context.datasetIndex === 1) {
            return ['Upptag','', `${Math.round(value)}`]
          }
        },
        textAlign: 'center',
        font: {
          family: font.main,
          size: "14px",
        },
      },
      tooltip: {
        enabled: false,
      }
   }
  }
      
    return options
}

export default ChartOptions