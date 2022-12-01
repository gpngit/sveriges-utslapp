//react hooks
import { useState } from 'react'
//components
import SourceAndShare from '../../buttons/SourceAndShare'
import { Grid, Content, Row, FirstContent, SecondContent, RowMobile, Heading, MobileButtons, DesktopButtons } from './ContainerStyles'
import FuelOrigin from '../../fuel-origin/FuelOriginPerYear'
import ChosenYear from './currentYearBlob'


const FaktaTwo = ({pageElements, energiMyndighetenData}) => {
    
    const {id, sections, name} = pageElements
    const [show, setShow] = useState(pageElements.show)
    const title = sections.find(section => section.name === 'title')
    const subheading = sections.find(section => section.name === 'subheading')
    const body1 = sections.find(section => section.name === 'body1')
    const url = sections.find(section => section.name === 'source')
    
    return (
    <>
    {show && 
    <Content id="fakta-biobransle">
        <Row>
                <ChosenYear
                emissions = {energiMyndighetenData}
                name = {name}
                />
                <Heading>
                <p>{subheading.text.toUpperCase()}</p>
                <h2>{title.text}</h2>
                </Heading>
        </Row>
        <Grid>
            <FirstContent 
            biobransle>
            <p>{body1.text}</p>
            <DesktopButtons>
            <SourceAndShare 
                whiteBG={"yes"}
                sourceLink={url.text} 
                shareLink={'#fakta-biobransle'} 
                sourceText={title.text}
                />
            </DesktopButtons>
            </FirstContent>
            <SecondContent
            biobransle>
                <FuelOrigin energiMyndighetenData={energiMyndighetenData} />
                <MobileButtons>
                  
                <SourceAndShare 
                whiteBG={"yes"}
                sourceLink={url.text} 
                shareLink={'#fakta-biobransle'} 
                sourceText={title.text}
                />
                </MobileButtons>
            </SecondContent>
        </Grid>
    </Content>
    }
    </>
    );
}
 
export default FaktaTwo;