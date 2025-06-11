<style>
  star::after { content: '*'; color: yellow; }
</style>

# 2024_python

## Just for the records

#### Project setup

```bash
pipenv --python 3.11
pipenv install --dev pytest coverage
```

## Some commands:

#### Enter/Activate virtual env

```bash
make venv
```

#### Run tests

```bash
make test
make test TEST_ARGS=tests/day1/puzzle1.py
make coverage
```
#### Run some day's puzzle

For example, run first day's puzzle 1.

```bash
PYTHONPATH=. python3 -B src/day1/run_puzzle1.py
```

## Puzzle's results

| Day   | Puzzle 1 | Puzzle 2 |
| :---  | :---:    | :---:    |
| Day 1 | 2057374 <star /> | 23177084 <star /> |
| Day 2 | 242 <star /> | 311 <star /> |
| Day 3 | 174336360 <star /> | ~~79842763~~ *(Too low)*<br />~~129087088~~ *(Too high)*<br />~~98826679~~ *(Too high)*<br />88802350 <star /> |
| Day 4 | 2454 <star /> | 1858 <star /> |
| Day 5 | | |
| Day 6 | | |
| Day 7 | | |
| Day 8 | | |
| Day 9 | | |
| Day 10 | | |
| Day 11 | | |
| Day 12 | | |
| Day 13 | | |
| Day 14 | | |
| Day 15 | | |
| Day 16 | | |
| Day 17 | | |
| Day 18 | | |
| Day 19 | | |
| Day 20 | | |
| Day 21 | | |
| Day 22 | | |
| Day 23 | | |
| Day 24 | | |
| Day 25 | | |

### Notes

#### Day 3 Puzzle 2
I don't remember why I failed the first attempt. The second one I wasn't "deleting" the `mul` operations after the `don't()` until the end of line (Though it wasn't necessary, because what I was gonna find out in the last attempt). The third I was taking the input as 6 separate programs, one by line.
