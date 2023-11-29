import React from 'react'
import {PropTypes } from 'prop-types'
import Cards from './cards'
const Rows = (props) => {
  return (
    <div className='container-fluid py-5'>

<div className='row pt-4'>

    <div className='col'>
<Cards 
title = 'photo1'
image = 'https://www.google.com/imgres?imgurl=https%3A%2F%2Few.com%2Fthmb%2FEeNqEL_aopaHzIrotPpDfoXxwlM%3D%2F1500x0%2Ffilters%3Ano_upscale()%3Amax_bytes(150000)%3Astrip_icc()%2FBaby-Yoda-Concept-Art-01-83501e79365947dea36d28d6d1866560.jpg&tbnid=wt-DBm9OQN9vSM&vet=12ahUKEwiPgsy08-eCAxW1ZjABHT7HCbUQMygDegUIARDqAQ..i&imgrefurl=https%3A%2F%2Few.com%2Ftv%2Fmandalorian-early-baby-yoda%2F&docid=LCXPP9CQNrsEMM&w=1500&h=839&q=baby%20yoda&ved=2ahUKEwiPgsy08-eCAxW1ZjABHT7HCbUQMygDegUIARDqAQ'
text = 'This is baby yoda'
/>
    </div>
    <div className='col'>
<Cards 
title = 'photo1'
image = 'https://www.google.com/imgres?imgurl=https%3A%2F%2Few.com%2Fthmb%2FEeNqEL_aopaHzIrotPpDfoXxwlM%3D%2F1500x0%2Ffilters%3Ano_upscale()%3Amax_bytes(150000)%3Astrip_icc()%2FBaby-Yoda-Concept-Art-01-83501e79365947dea36d28d6d1866560.jpg&tbnid=wt-DBm9OQN9vSM&vet=12ahUKEwiPgsy08-eCAxW1ZjABHT7HCbUQMygDegUIARDqAQ..i&imgrefurl=https%3A%2F%2Few.com%2Ftv%2Fmandalorian-early-baby-yoda%2F&docid=LCXPP9CQNrsEMM&w=1500&h=839&q=baby%20yoda&ved=2ahUKEwiPgsy08-eCAxW1ZjABHT7HCbUQMygDegUIARDqAQ'
text = 'This is baby yoda'
/>
    </div>
    <div className='col'>
<Cards 
title = 'photo1'
image = 'https://www.google.com/imgres?imgurl=https%3A%2F%2Few.com%2Fthmb%2FEeNqEL_aopaHzIrotPpDfoXxwlM%3D%2F1500x0%2Ffilters%3Ano_upscale()%3Amax_bytes(150000)%3Astrip_icc()%2FBaby-Yoda-Concept-Art-01-83501e79365947dea36d28d6d1866560.jpg&tbnid=wt-DBm9OQN9vSM&vet=12ahUKEwiPgsy08-eCAxW1ZjABHT7HCbUQMygDegUIARDqAQ..i&imgrefurl=https%3A%2F%2Few.com%2Ftv%2Fmandalorian-early-baby-yoda%2F&docid=LCXPP9CQNrsEMM&w=1500&h=839&q=baby%20yoda&ved=2ahUKEwiPgsy08-eCAxW1ZjABHT7HCbUQMygDegUIARDqAQ'
text = 'This is baby yoda'
/>
    </div>
</div>

    </div>
  )
}

export default Rows