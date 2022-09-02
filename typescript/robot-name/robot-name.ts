

let blah: any = {}

export class Robot {
  private currentName: string

  constructor() {
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
    return this.currentName
  }

  public resetName(): void {
    let newName: string

    do {
      newName = this.generateName()
    } while (blah[newName] !== undefined)

    this.currentName = newName
    blah[newName] = 1
  }

  public static releaseNames(): void {
    blah = {}
  }
}
