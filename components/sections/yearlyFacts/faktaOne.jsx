//components
import SourceAndShare from '../../buttons/SourceAndShare'
import BarChart from '../../barchart/BarChart'
import { Grid, Content, Row, FirstContent, SecondContent, ButtonWrapper } from './ContainerStyles'
import { useState } from 'react'
import ChosenYear from './currentYearBlob'

const FaktaOne = ({pageElements, emissions}) => {

    const [show, setShow] = useState(pageElements.show)
    const {id, sections, name} = pageElements
    const title = sections.find(section => section.name === 'title')
    const subheading = sections.find(section => section.name === 'subheading')
    const body1 = sections.find(section => section.name === 'body1')
    const url = sections.find(section => section.name === 'source')
    
    return (
    <>{show && <>
        <Content 
        id="faktaruta1">
        <Grid>
            <FirstContent>
                <Row>
                <ChosenYear 
                emissions={emissions}/>
                <span>
                    <p>
                        {subheading.text.toUpperCase()}</p>
                    <h2>{title.text}</h2>
                </span>
                </Row>
                <BarChart emissions={emissions}/>     
            </FirstContent>
            <SecondContent
            kollagertxt>
                <p>{body1.text}</p>
                <SourceAndShare 
                whiteBG={"yes"}
                sourceLink={url.text} 
                shareLink={'#faktaruta1'}
                sourceText={title.text} />
                </SecondContent>
        </Grid>
        </Content>
        </>}</>
    );
}
 
export default FaktaOne;