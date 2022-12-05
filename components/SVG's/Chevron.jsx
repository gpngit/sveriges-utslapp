
const Chevron = ({ color, size, direction, stroke }) => {
    return (
        <>
        {direction === 'left' ? 
        <svg height={size} 
        viewBox="0 0 37 66" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" role="img" >
            <path d="M34 3L4 33L34 63" stroke={color} strokeWidth={stroke} strokeLinecap="round"/>
        </svg>
        : direction === 'right' ?
        <svg height={size} viewBox="0 0 37 66" fill="none" role="img" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 3L33 33L3 63" stroke={color} strokeWidth={stroke} strokeLinecap="round"/>
        </svg>
        : direction === 'down' ?
        <svg width={size} viewBox="0 0 66 37" fill="none"  role="img" xmlns="http://www.w3.org/2000/svg">
            <path d="M63 3L33 33L3 3" stroke={color} strokeWidth={stroke} strokeLinecap="round"/>
        </svg>
        :
        <svg width={size} viewBox="0 0 66 37" fill="none" role="img" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 34L33 4L63 34" stroke={color} strokeWidth={stroke} strokeLinecap="round"/>
        </svg>
        }
        </>
    )
}

export default Chevron