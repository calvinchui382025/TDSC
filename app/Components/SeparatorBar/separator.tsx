import { Parallax } from 'react-parallax';
import main from './banner2.jpg';
import secondary from './banner3.jpg';
import { CustomParallax, ParallaxContainer } from './SeparatorStyles';

const Separator = ({data}) => {
  return (
    <CustomParallax
    style={{
      height: `${data.separatorheight}`,
    }}
    bgImage={data.image}
    strength={800}
    >
      <ParallaxContainer
      style={{
        height: `${data.separatorheight}`,
      }}
      >
        <h1 style={{
          fontFamily: 'sans-serif',
          color: 'white',
          fontSize: '3rem',
          textTransform: 'uppercase',
        }}>{data.title}</h1>
      </ParallaxContainer>
    </CustomParallax>
)};

export default Separator;