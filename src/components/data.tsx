import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRippleIcon,
  DevicePhoneMobileIcon,
  AdjustmentsVerticalIcon,
  SunIcon,
} from '@heroicons/react/24/solid'

import benefitOneImg from '../../public/img/benefit-one.png'
import benefitTwoImg from '../../public/img/benefit-two.png'

const benefitOne = {
  title: 'Highlight your benefits',
  desc: 'You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.',
  image: benefitOneImg,
  bullets: [
    {
      title: 'Understand your customers',
      desc: 'Then explain the first point breifly in one or two lines.',
      icon: <FaceSmileIcon />,
    },
    {
      title: 'Improve acquisition',
      desc: 'Here you can add the next benefit point.',
      icon: <ChartBarSquareIcon />,
    },
    {
      title: 'Drive customer retention',
      desc: 'This will be your last bullet point in this section.',
      icon: <CursorArrowRippleIcon />,
    },
  ],
}

const benefitTwo = {
  title: 'Offer more benefits here',
  desc: 'You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.',
  image: benefitTwoImg,
  bullets: [
    {
      title: 'Mobile Responsive',
      desc: 'V3 designs for mobile first.',
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: 'Powered by powered by latest technologies and tools',
      desc: 'Vercel, Next.js, and JAMstack content management.',
      icon: <AdjustmentsVerticalIcon />,
    },
    {
      title: 'Dark & Light Mode',
      desc: 'We love light & dark mode. ',
      icon: <SunIcon />,
    },
  ],
}

export { benefitOne, benefitTwo }
