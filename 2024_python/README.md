# 2024_python

## Just for the records

#### Project setup

```bash
sudo apt-get install python3-pip
sudo apt-get install pipenv

# start the venv
pipenv --python /usr/bin/python  # or /usr/bin/python3
pipenv install --dev pytest coverage

# once started (pipfile created) if running in new pc
pipenv install --dev
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
| Day 1 | 2057374 ⭐ | 23177084 ⭐ |
| Day 2 | 242 ⭐ | 311 ⭐ |
| Day 3 | 174336360 ⭐ | ~~79842763~~ *(Too low)*<br />~~129087088~~ *(Too high)*<br />~~98826679~~ *(Too high)*<br />88802350 ⭐ |
| Day 4 | 2454 ⭐ | 1858 ⭐ |
| Day 5 | 4790 ⭐ | 6319 ⭐ |
| Day 6 | 4696 ⭐ | 1443 ⭐ |
| Day 7 | 2941973819040 ⭐ | 249943041417600 ⭐ |
| Day 8 | 259 ⭐ | |
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
