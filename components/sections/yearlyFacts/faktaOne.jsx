//react hooks
import { useState, useEffect } from 'react'
//components
import SourceAndShare from '../../buttons/SourceAndShare'
import { Grid, Paragraph, Content, Heading, Row, FirstContent, SecondContent, RowMobile} from './ContainerStyles'
import ChosenYear from './currentYearBlob'
import Kollagring from '../../barchart/Kollagring'
import Link from 'next/link'



const FaktaOne = ({pageElements, emissions}) => {

    const [show, setShow] = useState(pageElements.show)
    const {id, sections, name} = pageElements
    const title = sections.find(section => section.name === 'title')
    const subheading = sections.find(section => section.name === 'subheading')
    const body1 = sections.find(section => section.name === 'body1')
    const url = sections.find(section => section.name === 'source')

    useEffect(() => {
        //radbryt:
        document.getElementById(`faktaruta1-body1`).innerText = body1.text.replaceAll(/<br\s*[/]?>/gi, "\n");
           }, [])

    return (
    <>{show && <>
        <Content 
        id="faktaruta1"
        >
        <Row>
            <ChosenYear 
                emissions={emissions}/>
                <Heading>
                    <p>{subheading.text.toUpperCase()}</p>
                    <h2>{title.text}</h2>
                </Heading>
                </Row>
        <Grid>
            <FirstContent>
                <Kollagring emissions={emissions}/>
                <br></br>
            </FirstContent>
            <SecondContent>
                <Paragraph id="faktaruta1-body1">{body1.text.replaceAll(/<br\s*[/]?>/gi, "")}
                </Paragraph>
                
                <RowMobile>
                <SourceAndShare 
                whiteBG={"yes"}
                sourceLink={url.text} 
                shareLink={'#faktaruta1'}
                sourceText={title.text} />
                    <p className="footnote">Fotnot: <abbr>LULUCF</abbr> betyder Land Use, Land Use Change and Forestry och ingår i klimatrapporteringen. Mer om det går att läsa   
                    <Link href="https://www.naturvardsverket.se/data-och-statistik/klimat/vaxthusgaser-nettoutslapp-och-nettoupptag-fran-markanvandning/"> här.</Link></p>
                    </RowMobile> 
            </SecondContent>
        </Grid>
        </Content>
        </>}</>
    );
}
 
export default FaktaOne;