//CSS
import styled, {css} from "styled-components";
import { flex, colors, size, fonts, device } from '../../styles/partials'
//Charts
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import ChartOptions from "./ChartOptions";
//react hooks
import { useState, useEffect, useRef } from 'react';
//resources
import { SmallArrow } from "../SVG's/Arrows";

const Container = styled.section`
  position: relative;
  padding-bottom: 5em;
  color: ${colors.secondary};
  @media ${device.mobileL}{
    padding-right: 0em;
  }
  
`
const ButtonContainer = styled.div`
  padding: 1rem;
  ${flex('row', 'center', 'center')};
  gap: 1rem;

  @media (max-width: ${size.tablet}) {
    display: none;
  }
`
const Scrolltext = styled.div`
  width: 100%;
  ${flex('row', 'flex-end', 'flex-end')};
  ${fonts.paragraph}
  gap: 1rem;
  padding: 1rem;
  color: ${colors.bio};

  @media (min-width: ${size.tablet}) {
  display: none;
  }
  max-width:1300px;
`
const ScrollContainer = styled.div`
  position: relative;
  height: 100%;
  //*IE AND FIREFOX:
  -ms-overflow-style: none;
  scrollbar-width: none;
  width: 100%;
  ${flex('row')};
  overflow-x: auto;
  max-width:1300px;
  &::-webkit-scrollbar {
      display: none;
  }
`
const ChartContainer = styled.div`
  min-height: 70vh;
  width: 70%;
  min-width: ${size.tablet};
  max-width:1400px;
`

const FuelOrigin = ({energiMyndighetenData}) => {

  const canvas = useRef()
  const [options, setOptions] = useState(ChartOptions())
  const [chartData, setChartData] = useState({
    datasets: [],
  })

  const colors = ['#562828','#563728', '#564228', '#525628', '#3a5628', '#285639', '#285556', '#283b56', '#3c2856', '#562847']

  const datasets = []
  for (let i=0; i<10; i++){
    let obj = {
        label: energiMyndighetenData.map(data => data.fuels[i]).map(data => data.name)[i],
        data: energiMyndighetenData.map(data => data.fuels[i]).map(data => data.value),
        fill: true,
        backgroundColor: colors[i],
        pointRadius: 0,
        tension: .2,
        borderColor: colors[i]
    }
    datasets.push(obj)
  }
  
  useEffect(() => {
    setChartData({
        labels: energiMyndighetenData.map(data => data.year),
        datasets: datasets    
    })
  }, [])

   // for drawing line on chart when hover over tooltip
   const linePlugin = {
    afterDraw: chart => {
      let ctx = chart.ctx;
      let yAxis = chart.scales.y;

      let gradient = ctx.createLinearGradient(0, 0, 0, yAxis.height);
      gradient.addColorStop(0, 'transparent');
      gradient.addColorStop(1 , "rgba(0,0,0,.5)");

      if (chart.tooltip?._active?.length) {
        let x = chart.tooltip._active[0].element.x;
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(x, yAxis.top);
        ctx.lineTo(x, yAxis.bottom);
        ctx.lineWidth = 10;
        ctx.strokeStyle = gradient;
        ctx.stroke();
        ctx.restore(); 
      }
    }
  }

  return (
      <Container id='line-chart'>
        <Scrolltext>
          <p>Scrolla för att se utveckling</p>
          <SmallArrow color={colors.bio} size={16} />
        </Scrolltext>
        <ScrollContainer>
          <ChartContainer>
            <Line ref={canvas} 
            data={chartData} 
            options={options} 
            plugins={[linePlugin]} />
          </ChartContainer>
        </ScrollContainer>
      </Container>
  )
}

export default FuelOrigin