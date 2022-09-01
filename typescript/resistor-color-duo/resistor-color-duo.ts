
type ResistorColorValues = {
  [key: string]: number
}

const RESISTOR_COLOR_VALUES: ResistorColorValues = {
  'black': 0,
  'brown': 1,
  'red': 2,
  'orange': 3,
  'yellow': 4,
  'green': 5,
  'blue': 6,
  'violet': 7,
  'grey': 8,
  'white': 9,
}
export function decodedValue(colors: string[]): number {
  // just take the first two colors
  const resistorColors = colors.slice(0, 2)

  const result: number[] = resistorColors.reduce((acc: number[], resistorColor: string): number[] => {
    const resistorValue = RESISTOR_COLOR_VALUES[resistorColor.toLowerCase()]
    acc.push(resistorValue)
    return acc
  }, [])

  // convert to number https://stackoverflow.com/a/14668510/1612219
  const decoded = +result.join('')
  return decoded
}
