export function translateCharacter(character: string, position: number) {
  const failed = 'Error!! character cannot be empty or position negative';
  //check if character is empty and if position is negative
  if (character.length === 0 || position < 0) {
    return failed;
  }

  // Calculate the number of characters in one turn;
  const num_of_character = character.length;

  // Calculate the number of complete turns;
  const num_turns_completed = Math.floor(position / num_of_character);

  // Calculate the remaining position after complete turns;
  const num_turns_left = position - num_turns_completed * num_of_character;

  // Find the character at the remaining position
  const last_char_position = character.charAt(num_turns_left);

  // Return the character and the number of turns taken;
  return [last_char_position, num_turns_completed];
}
