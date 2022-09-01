export function isArmstrongNumber(number: number): boolean {

  const numberDigits = String(number)
  const numberLength = numberDigits.length

  const total: number = numberDigits.split('').reduce((acc: number, item: string): number => {
    acc += Math.pow(Number(item), numberLength)
    return acc
  }, 0)

  return total === number
}
