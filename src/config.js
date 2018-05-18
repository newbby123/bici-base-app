export const VERSION = '0.1.0'

export const IS_DEV = __DEV__
export const IN_DEBUGGER = IS_DEV && Boolean(window.navigator.userAgent)

export const ENV_NAMES = [
  'development',
  'testing',
  'staging',
  'production'
]
export const COLOR = {
  theme: '#008cee',
  ButtonNormal: '#1D9ED7',
  textPrompt: '#929292',
  textNormal: '#5E5E5E',
  textEmpha: '#212121',
  textLightPrompt: '#EBEBEB',
  textLightNormal: '#FFFFFF',
  backgroundDarker: '#D6D6D6',
  backgroundNormal: '#EBEBEB',
  backgroundLighter: '#FFFFFF',
  backgroundDarkLighter: '#424242',
  backgroundColor: '#e9e9ef',
  backgroundDarkNormal: '#000000',
  backgroundNotice: '#FFFB00',
  linePrompt: '#EBEBEB',
  lineNormal: '#A9A9A9',
  lineEmpha: '#929292'
}

export const ENVS = [
  { name: ENV_NAMES[0], desc: '开发', apiBaseUrl: 'http://api.dev.com/base' },
  { name: ENV_NAMES[1], desc: '测试', apiBaseUrl: 'http://api.test.com/base' },
  { name: ENV_NAMES[2], desc: '预发布', apiBaseUrl: 'http://api.staging.com/base' },
  { name: ENV_NAMES[3], desc: '生产', apiBaseUrl: 'https://api.com/base' }
]