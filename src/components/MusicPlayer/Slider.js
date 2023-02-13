import React from 'react'
// import Slider from 'rc-slider'
// import 'rc-slider/assets/index.css'
import style from './StyleSlider.css'

const StyleSlider = (props) => {
  const { value } = props

  return (
    <div className={style.range}>
      <div className={style.sliderBg} style={{ width: `${value}%` }}></div>
      <input type="range" {...props} />
    </div>
  )
}

export default StyleSlider