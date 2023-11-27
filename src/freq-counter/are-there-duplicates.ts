// Frequency Counter - areThereDuplicates
// Implement a function called areThereDuplicates which accepts a variable number of arguments,
// and checks whether there are any duplicates among the arguments passed in.

// Restrictions: Time Complexity - O(n), Space Complexity - O(n)

export default function areThereDuplicates(...args: any) {
  if (args.length === 0) return false;

  let dict: any = {};

  for (let i = 0; i < args.length; i++) {
    if (dict[args[i]]) {
      return true;
    } else {
      dict[args[i]] = 1;
    }
  }

  return false;
}
