
//components
import SourceAndShare from '../../buttons/SourceAndShare'
import { Grid, Content, Row, FirstContent, SecondContent} from './ContainerStyles'
import Image from 'next/image'
import placeholder from "../../../public/placeholder__2.jpg"
import FuelOrigin from '../../fuel-origin/FuelOrigin'
import { useState } from 'react'
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
        <Grid>
            <FirstContent>
                <Row>
                <ChosenYear/>
                <span>
                    <p>
                        {subheading.text.toUpperCase()}</p>
                    <h2>{title.text}</h2>
                </span>
                </Row>
                <FuelOrigin energiMyndighetenData={energiMyndighetenData} />
            </FirstContent>
            <SecondContent
            biobransle>
                <p>{body1.text}</p>
            <SourceAndShare 
            whiteBG={"yes"}
            sourceLink={url.text} 
            shareLink={'#fakta-biobransle'} 
            sourceText={title.text}
            />
            </SecondContent>
        </Grid>
    </Content>
    }
    </>
    );
}
 
export default FaktaTwo;