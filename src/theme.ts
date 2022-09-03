export enum ColorName {
  White = 'white',
  Black = 'black',
  CyanCornflowerBlue = 'cyanCornflowerBlue',
  BrightYellow = 'brightYellow',
  Linen = 'linen',
  SpaceCadet = 'spaceCadet',
  DavysGrey = 'davysGrey',
  Apple = 'apple',
  Pistachio = 'pistachio',
  Sunglow = 'sunGlow',
  DeepSaffron = 'deepSaffron',
  DarkSilver = 'darkSilver',
}

export type Color = Record<ColorName, string>;

export type ISharedTheme = {
  colors: Color;
}

const SharedTheme: ISharedTheme = {
  colors: {
    white: '#FFFFFF',
    black: '#000000',
    cyanCornflowerBlue: '#1087CB',
    brightYellow: '#FFB124',
    linen: '#F9F4E6',
    spaceCadet: '#13344C',
    davysGrey: '#585858',
    apple: '#51AB55',
    pistachio: '#A0CF67',
    sunGlow: '#FDCD3B',
    deepSaffron: '#FF8E28',
    darkSilver: '#707070',
  },
}

export { SharedTheme };