import React from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

const StyleSlider = (props) => {
    const style = {height: 20, padding: 0, margin: 0, width: 200}

    const handleStyle = {display: 'none'}

    const railStyle = {height: 20, borderRadius: 10, backgroundColor: '#d6d6d6'}

    const trackStyle = {height: 20, borderRadius: 10, backgroundColor: '#3e98c7'}

  return (
    <Slider
        style={style}
        handleStyle={handleStyle}
        railStyle={railStyle}
        trackStyle={trackStyle}
        {...props} />
  )
}

export default StyleSlider