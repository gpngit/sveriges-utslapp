//react hooks
import { useState, useEffect } from 'react'
//components
import SourceAndShare from '../../buttons/SourceAndShare'
import { Grid, Paragraph, Content, Row, FirstContent, SecondContent, RowMobile, Heading, MobileButtons, DesktopButtons } from './ContainerStyles'
import FuelOrigin from '../../fuel-origin/FuelOriginPerYear'
import ChosenYear from './currentYearBlob'

const FaktaTwo = ({pageElements, energiMyndighetenData}) => {
    
    const {id, sections, name} = pageElements
    const [show, setShow] = useState(pageElements.show)
    const title = sections.find(section => section.name === 'title')
    const subheading = sections.find(section => section.name === 'subheading')
    const body1 = sections.find(section => section.name === 'body1')
    const url = sections.find(section => section.name === 'source')

    useEffect(() => {
        //radbryt:
        document.getElementById(`fakta-biobransle-body1`).innerText = body1.text.replaceAll(/<br\s*[/]?>/gi, "\n");
        }, [])

    return (
    <>
    {show && 
    <Content
    biobransle
    id="fakta-biobransle">
        <Row 
        biobransle>
            <ChosenYear
            emissions = {energiMyndighetenData}/>
            <Heading>
                <p>{subheading.text.toUpperCase()}</p>
                <h2>{title.text}</h2>
            </Heading>
        </Row>
        <Grid>
            <FirstContent 
            biobransle>
                <Paragraph 
                id="fakta-biobransle-body1">
                    {body1.text.replaceAll(/<br\s*[/]?>/gi, "")}
                </Paragraph>
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
                <FuelOrigin 
                energiMyndighetenData={energiMyndighetenData} />
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