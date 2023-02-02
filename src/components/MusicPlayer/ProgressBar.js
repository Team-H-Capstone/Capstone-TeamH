import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'

const ProgressBar = (props) => {
  return (
    <CircularProgressbar
        percentage={props.percentage}
        // text={`${props.text}%`}
        text={props.text}

        strokeWidth={5}
        styles={{
            root: { },
            path: {
                // stroke: `rgba(62, 152, 199, ${props.percentage / 100})`,
                stroke: '#0086ffcc',
                strokeLinecap: 'butt',
                transition: 'stroke-dashoffset 0.5s ease 0s',
            },
            trail: {
                stroke: '#ffffffcc',
                // strokeLinecap: 'butt',
                // transform: 'rotate(0.25turn)',
                // transformOrigin: 'center center',
            },
            text: {
                fill: '#f88',
                fontSize: '30px',
            },
        }}
    />
  )
}

export default ProgressBar