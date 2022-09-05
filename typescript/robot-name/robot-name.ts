

let ROBOT_NAMES: any = {}
let ROBOT_NAME_PREFIXES: any = {}
const ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const MAX_ALPHA_INDEX = ALPHA.length - 1
const NUM_ALPHA = 2
const MAX_NUMERIC_SEQUENCE = 999 // 000 is available
const ROBOT_NAME_PREFIX_LENGTH = 2
const ROBOT_NAME_LENGTH = 5

const generateRobotName = (): string => {
  let name = ''
  do {
    name = randomRobotName(name)
  } while (robotNameIsUsed(name))

  burnRobotName(name)
  return name
}

const padNumericSequence = (sequence: number | string) => {
  return String(sequence).padStart((ROBOT_NAME_LENGTH - ROBOT_NAME_PREFIX_LENGTH), '0')
}

const randomRobotName = (input: string = ''): string => {
  const chars: string[] = []
  const prefix = getRobotNamePrefix(input)

  if (prefix) {
    // Add this algorithm so last test takes reasonable time else it could take
    // ages to try and randomly go thru ALL the available robot names
    // if prefix passed in, then this means that the robot name
    // generated already exists, so ...
    // - if the prefix is full, then we change second letter of prefix and move to next
    // - if the prefix is still full, then we change first letter of prefix and move second letter to A
    // - if not full, we want next numeric sequence if it's available
    const numbers = +getRobotNameNumbers(input)
    // check the count of the codes for a prefix
    if (ROBOT_NAME_PREFIXES[prefix] > MAX_NUMERIC_SEQUENCE) {
      // increment the second alpha
      let alpha1Index = ALPHA.indexOf(prefix[0])
      let alpha2Index = ALPHA.indexOf(prefix[1]) + 1
      if (alpha2Index > MAX_ALPHA_INDEX) {
        alpha2Index = 0
        alpha1Index++
        if (alpha1Index > MAX_ALPHA_INDEX) {
          alpha1Index = 0
        }
      }

      chars.push(ALPHA[alpha1Index])
      chars.push(ALPHA[alpha2Index])
      chars.push(padNumericSequence(numbers))

    } else {
      chars.push(prefix[0])
      chars.push(prefix[1])
      // increment the numbers
      if (numbers >= MAX_NUMERIC_SEQUENCE) {
        chars.push(padNumericSequence(''))
      } else {
        chars.push(padNumericSequence(numbers + 1))

      }
    }

  } else {
    // generate random robot name
    for (let i = 0; i < NUM_ALPHA; i++) {
      chars.push(randomise(ALPHA))
    }

    const number = Math.floor(Math.random() * MAX_NUMERIC_SEQUENCE)
    chars.push(padNumericSequence(number))
  }

  return chars.join('')
}

const getRobotNamePrefix = (robotName: string): string => {
  if (robotName.length < ROBOT_NAME_PREFIX_LENGTH) {
    return ''
  }
  return robotName.slice(0, ROBOT_NAME_PREFIX_LENGTH)
}
const getRobotNameNumbers = (robotName: string): string => {
  if (robotName.length < ROBOT_NAME_LENGTH) {
    return ''
  }
  return robotName.slice(ROBOT_NAME_PREFIX_LENGTH, ROBOT_NAME_LENGTH)
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
    console.log(ROBOT_NAME_PREFIXES)

    // const sortedPrefixes = Object.keys(ROBOT_NAME_PREFIXES).sort()
    // for (const prefix of sortedPrefixes) {
    //   console.log(prefix, ':', ROBOT_NAME_PREFIXES[prefix])
    // }
  }
}
