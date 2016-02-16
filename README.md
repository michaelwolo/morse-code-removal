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
