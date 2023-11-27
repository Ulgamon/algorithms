// Frequency Counter - constructNote
// Write a function called constructNote, which accepts two strings, a message and some letters.
// The function should return true if the message can be built with the letters
// that you are given, or it should return false.
// Assume that there are only lowercase letters and no space or
// special characters in both the message and the letters.

// Bonus Constraints:
// If M is the length of message and N is the length of letters:
// Time Complexity: O(M+N)
// Space Complexity: O(N)

export default function constructNote(msg: string, letters: string) {
  if (letters.length < msg.length) return false;
  const letterDict: any = {};

  for (let i = 0; i < letters.length; i++) {
    if (letterDict[letters[i]]) {
      letterDict[letters[i]]++;
    } else {
      letterDict[letters[i]] = 1;
    }
  }

  for (let i = 0; i < msg.length; i++) {
    if (letterDict[msg[i]] && (letterDict[msg[i]]) !== 0) {
        letterDict[msg[i]]--;
    } else {
        return false;
    }
  }

  return true;
}
