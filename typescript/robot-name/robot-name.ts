

let ROBOT_NAMES: any = {}
let ROBOT_NAME_PREFIXES: any = {}
const ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const NUMERIC = '0123456789'
const NUM_ALPHA = 2
const NUM_NUMERIC = 3

const generateRobotName = (): string => {
  // const chars: string[] = []

  // for (let i = 0; i < NUM_ALPHA; i++) {
  //   chars.push(randomise(ALPHA))
  // }
  // for (let i = 0; i < NUM_NUMERIC; i++) {
  //   chars.push(randomise(NUMERIC))
  // }

  // const nameCode = chars.join('')
  let name = ''
  do {
    name = randomRobotName(name)
  } while (robotNameIsUsed(name))

  burnRobotName(name)
  return name
}

const randomRobotName = (input: string = ''): string => {
  const chars: string[] = []
  const prefix = getRobotNamePrefix(input)
  if (prefix) {
    const numbers = +getRobotNameNumbers(input)
    // check the count of the codes for a prefix
    if (ROBOT_NAME_PREFIXES[prefix] >= 999) {
      // increment the second alpha
      let alpha1Index = ALPHA.indexOf(prefix[0])
      let alpha2Index = ALPHA.indexOf(prefix[1]) + 1
      if (alpha2Index > 25) {
        if (alpha1Index > 25) {
          alpha1Index = 0
        }
      }

      // const incrementedPrefix =
      chars.push(ALPHA[alpha1Index])
      chars.push(ALPHA[alpha2Index])
      chars.push(String(numbers))

    } else {
      chars.push(prefix)
      // increment the numbers
      if (numbers >= 999) {
        chars.push('0'.padStart(3, '0'))
      } else {
        chars.push(String(numbers + 1).padStart(3, '0'))
      }
    }

  } else {
    for (let i = 0; i < NUM_ALPHA; i++) {
      chars.push(randomise(ALPHA))
    }
    for (let i = 0; i < NUM_NUMERIC; i++) {
      chars.push(randomise(NUMERIC))
    }
  }

  return chars.join('')
}

const getRobotNamePrefix = (robotName: string): string => {
  if (robotName.length < 2) {
    return ''
  }
  return robotName.slice(0, 2)
}
const getRobotNameNumbers = (robotName: string): string => {
  if (robotName.length < 5) {
    return ''
  }
  return robotName.slice(2, 5)
}
const randomise = (dataSet: string): string => {
  const max = dataSet.length
  const randomIndex = Math.floor(Math.random() * max)
  return dataSet[randomIndex]
}

const burnRobotName = (robotName: string): void => {
  ROBOT_NAMES[robotName] = 1
  const prefix = getRobotNamePrefix(robotName)
  if (ROBOT_NAME_PREFIXES[prefix] === undefined) {
    ROBOT_NAME_PREFIXES[prefix] = 1
  } else {
    ROBOT_NAME_PREFIXES[prefix]++
  }
}

const robotNameIsUsed = (robotName: string): boolean => {
  return ROBOT_NAMES[robotName] !== undefined
}

const clearRobotNames = (): void => {
  ROBOT_NAMES = {}
  ROBOT_NAME_PREFIXES = {}
}

/////////////////////////////////
export class Robot {
  private currentName: string

  constructor() {
    this.currentName = ''
    this.resetName()
  }

  public get name(): string {
    return this.currentName
  }

  public resetName(): void {
    this.currentName = generateRobotName()
  }

  public static releaseNames(): void {
    clearRobotNames()
  }

  public debug(): void {
    const names = Object.keys(ROBOT_NAMES)
    names.sort()
    console.log(names)
    // console.log(ROBOT_NAME_PREFIXES)
  }
}
