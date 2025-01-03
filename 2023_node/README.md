# 2023_node

### Some commands:

__Run tests__
```bash
npm test
```

__Run one specific test__

For example run day 1, puzzle 2's tests
```bash
npm test -- test/day1/puzzle2.test.ts
```

Or run all tests for day 3
```bash
npm test -- test/day3
```

__Build__
```bash
npm run build
```

__Run some day's puzzle__

For example, run first day's puzzle 1.
```bash
node dist/day1/runPuzzle1.js
```

### Puzzle's results

| Day   | Puzzle 1 | Puzzle 2 |
| :---  | :---:    | :---:    |
| Day 1 | 56465    | 55902    |
| Day 2 | 1867     | 84538    |
| Day 3 | 509115   | 75220503 |
| Day 4 | 21088    | 6874754  |
| Day 5 | 825516882 | 136096660 |
| Day 6 | 1159152  | 41513103 |
| Day 7 | 248179786 | 247885995 |
| Day 8 | 22199 | 13334102464297 [^1] |
| Day 9 | 1731106378 | 1087 |
| Day 10 | 6701 | 303 |
| Day 11 | 9681886 | 791134099634 |
| Day 12 | 8419 ||
| Day 13 |||
| Day 14 |||
| Day 15 |||
| Day 16 |||
| Day 17 |||
| Day 18 |||
| Day 19 |||
| Day 20 |||
| Day 21 |||
| Day 22 |||
| Day 23 |||
| Day 24 |||
| Day 25 |||


[^1]: Using the puzzle2.approach2.ts script. The puzzle2.ts it's been running for more than 5 hours and it's in the 0.5% of the total walk. (Update: after almost a week I reach 1981611000000, something near 15% of the path. I stopped running it.)
