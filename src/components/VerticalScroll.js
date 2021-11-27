import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';

const VerticalSlider = styled((props) => {
  const ThumbComponent = ({children, ...other}) => {

    return (
      <SliderThumb {...other}>
        {children}
        <div className="h-10 w-5 rounded-md" style={{color: 'transparent', background:'linear-gradient(90.86deg, #FFC6CE 26.22%, #64D6EE 97.07%)'}}>a</div>
      </SliderThumb>
    )
  }

  return (
    <Slider aria-label="pretto slider" components={{ Thumb: ThumbComponent } } {...props}/>
  )
})({
  color: '#52af77',
  // height: 8,
  '&': {
    display: 'block',
    margin: 'auto',
  },
  '& .MuiSlider-track': {
    border: 'none',
    width: 0.5,
    color: 'rgba(80, 80, 80)'
  },
  '& .MuiSlider-thumb': {
    height: 40,
    width: 11,
    borderRadius: '5px',
    '&:before': {
      display: 'none',
    },
    '&:focus, &:hover, &.Mui-focusVisible': {
      boxShadow: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#52af77',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
  '& .MuiSlider-rail': {
    width: 0.5,
    opacity: 1,
    color: 'rgba(80, 80, 80)'
  }
});

export default VerticalSlider