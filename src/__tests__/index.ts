import { translateCharacter } from '../'

describe('findCharacterAndTurns', () => {
  test('Should return the correct character and turns for a valid input', () => {
    expect(translateCharacter('ABC', 11)).toEqual(['C', 3])
    expect(translateCharacter('UVWXYZ', 493)).toEqual(['V', 82])
    expect(translateCharacter('B64C%K@D', 62)).toEqual(['@', 7])
  })

  test('Should return the error message for an empty input set', () => {
    expect(translateCharacter('', 5)).toBe(
      'Error!! character cannot be empty or position negative',
    )
  })

  test('Should return the error message for a negative position', () => {
    expect(translateCharacter('ABC', -1)).toBe(
      'Error!! character cannot be empty or position negative',
    )
  })
})
