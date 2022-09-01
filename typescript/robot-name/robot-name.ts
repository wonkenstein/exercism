

interface BaseRobot {
  // currentName: string,
  // previousNames: string[],
};



export class Robot implements BaseRobot {
  private currentName: string
  public static previousNames: string[] = []

  constructor() {
    Robot.previousNames = []
    this.currentName = ''
    this.resetName()
  }

  private generateName(): string {
    const alpha: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numeric = '0123456789'
    const NUM_ALPHA = 2
    const NUM_NUMERIC = 3

    const chars: string[] = []

    for (let i = 0; i < NUM_ALPHA; i++) {
      chars.push(this.randomise(alpha))
    }
    for (let i = 0; i < NUM_NUMERIC; i++) {
      chars.push(this.randomise(numeric))
    }

    const nameCode = chars.join('')
    return nameCode
  }

  private randomise(dataSet: string) {
    const max = dataSet.length
    const randomIndex = Math.floor(Math.random() * max)
    return dataSet[randomIndex]
  }



  public get name(): string {
    // throw new Error('Implement Robot#name')
    return this.currentName
  }

  public resetName(): void {
    let newName = this.generateName()

    if (Robot.previousNames.includes(newName)) {
      console.log('resetName try again!', newName)
      this.resetName()
    } else {
      // console.log('resetName!', newName)
      this.currentName = newName
      Robot.previousNames.push(this.currentName)
    }
  }

  public static releaseNames(): void {
    Robot.previousNames = []
  }
}
