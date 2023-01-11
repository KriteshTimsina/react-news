import React, { useState } from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
const ReactHeart = () => {
    const [isClicked, setIsClicked] = useState(false);
    return (
        <div className='remove-link' onClick={() => setIsClicked(!isClicked)}>
            {isClicked ? <AiFillHeart color='red' /> : <AiOutlineHeart />}
        </div>
    )
}

export default ReactHeart