import Typography from 'typography'
import theme from 'typography-theme-sutro'

theme.googleFonts = [
  {
    name: 'Sarala',
    styles: ['400'],
  },
  {
    name: 'Adamina',
    styles: ['400'],
  },
]

theme.headerFontFamily = ['Sarala', 'sans-serif']
theme.bodyFontFamily = ['Adamina', 'Georgia', 'serif']
theme.overrideThemeStyles = () => ({
  'nav a': {
    color: 'inherit',
  },
  a: {
    color: 'rgb(29, 161, 242)',
  },
  'h1,h2,h3,h4,h5,h6': {
    letterSpacing: '.2em',
    textTransform: 'uppercase',
  },
})

const typography = new Typography(theme)

export default typography
