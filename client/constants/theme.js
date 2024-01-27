import { Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window');

const COLORS = {
  primary: "#2A4D50",
  secondary: "#DDF0FF",
  tertiary: "#FF7754",
  words: "#ffffff",

  gray: "#83829A",
  gray2: "#C1C0C8",
  lightgreen:"#b5e7a0",
  biege2:"#d4ac6e",
  lightblue:"#c0ded9",
  offwhite: "#F3F4F8",
  white: "#FFFFFF",
  black: "#000000",
  red: "#e81e4d",
  green: " #00C135",
  lightWhite: "#FAFAFC",
  darkblue: "#1f1f60",
  deepblue: "#000033",
  beige: "#f5f5dc"
};


const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 44,
  height,
  width
};

const MAX_WIDTH={
  mLarge:600,
}

const MAX_HEIGHT={
  hLarge:100,

}


const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};


export { COLORS, SIZES , SHADOWS, MAX_WIDTH, MAX_HEIGHT  };