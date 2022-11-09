
const InputForm = ({ pageElements }) => {

    const {id, details, name} = pageElements
    const {show, sections} = details
    const {body, title, subheading} = sections

    return (
        <form>
            <h3>{name}</h3>
            <input id="title" type="text" placeholder={title.text} />
            <input id="subheading" type="text" placeholder={subheading.text} />
            {body.map((section, i) => {
                return (
                    <input type="text" placeholder={section.text} />
                )
            })}

        </form>
    )
}

export default InputForm