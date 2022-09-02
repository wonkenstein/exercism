

let ROBOT_NAMES: any = {}
let ROBOT_NAME_PREFIXES: any = {}

const generateRobotName = (): string => {
  const alpha: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const numeric = '0123456789'
  const NUM_ALPHA = 2
  const NUM_NUMERIC = 3

  const chars: string[] = []

  for (let i = 0; i < NUM_ALPHA; i++) {
    chars.push(randomise(alpha))
  }
  for (let i = 0; i < NUM_NUMERIC; i++) {
    chars.push(randomise(numeric))
  }

  const nameCode = chars.join('')
  return nameCode
}

const randomise = (dataSet: string): string => {
  const max = dataSet.length
  const randomIndex = Math.floor(Math.random() * max)
  return dataSet[randomIndex]
}

const burnRobotName = (robotName: string): void => {
  ROBOT_NAMES[robotName] = 1
}

const robotNameIsUsed = (robotName: string): boolean => {
  return ROBOT_NAMES[robotName] !== undefined
}

const clearRobotNames = (): void => {
  ROBOT_NAMES = {}
  ROBOT_NAME_PREFIXES = {}
}

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
    let newName: string

    do {
      newName = generateRobotName()
    } while (robotNameIsUsed(newName))

    this.currentName = newName
    burnRobotName(newName)
  }

  public static releaseNames(): void {
    clearRobotNames()
  }
}
