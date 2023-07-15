import { Parallax } from 'react-parallax';
import main from './banner2.jpg';
import secondary from './banner3.jpg';
import { CustomParallax, ParallaxContainer, ParallaxContent, ParallaxTitle } from './SeparatorStyles';

const Separator = ({data}) => {
  return (
    <CustomParallax
    style={{
      height: `${data.separatorheight}`,
    }}
    bgImage={data.image}
    strength={950}
    >
      <ParallaxContainer
      style={{
        height: `${data.separatorheight}`,
      }}
      >
        <ParallaxTitle>{data.title}</ParallaxTitle>
        <ParallaxContent>{data.content}</ParallaxContent>
        {data.dom}
      </ParallaxContainer>
    </CustomParallax>
)};

export default Separator;