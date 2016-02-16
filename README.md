# Counting Deletion Paths

### Problem Definition

Given a string that has been converted to Morse code, find all of the possible
and unique sequences of remaining tokens after removing the second message
from the first.

Example:

  - Given: \* - _ - * * *
  - Remove:  \* - *
  - This can be done 6 different ways (where X marks a deletion):
    - X X _ - X \* \*
    - X X _ - \* X \*
    - X X _ - \* \* X
    - X - _ X X \* \*
    - X - _ X \* X \*
    - X - _ X \* \* X
  - While there are 6 outcomes, only 2 sequences are unique
    - _ - \* \*
    - \- _ \* \*
  - The final result is 2

Write a program that can calculate all of the deletion paths for removing one
Morse code message from another. This program should be able to calculate all
of the paths in the example below in under 10 seconds and return the total
number of paths found.

  - Given: Hello World
    - \* \* \* \* _ \* _ \* - \* \* _ \* - \* \* _ - - - _ _ _ \* - - _ - - - _ \* - \* _ \* - \* \* _ - \* \*
  - Remove: Help
    - \* \* \* \* _ \* _ \* - \* \* _ \* - - \*
  - Result: 1311

### Solution

My approach to the problem keeps a list of all variants after each character
deletion. Each variant has a list of deletion indexes (where characters in this
variant have previously been deleted), a remaining substring (sliced after the
last character deletion) and a start index (to keep track of the remaining
substring from the original given string).

The program starts by creating a single variant from the given string. There
are no deletions and the remaining string is equal to the original value.

Looping through each character in the removal string, new variants are added.
Each character checks each relevant variant (read: contains deletions from each
preceding character in the removal string) and continues to add more variants
to the list.

After all possible variants are created, a list of results is created by
removing characters from the original given string at the specified deletion
indexes in each variant (where the number of deletion indexes equals the length
of the removal string).

Duplicates are removed and the remaining count is returned.
