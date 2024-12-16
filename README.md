# Advent of Code

Using [aocrunner](https://github.com/caderek/aocrunner/tree/main), a utility to create and run [Advent of Code](https://adventofcode.com/2022/about) solutions.

## Installation

To create the AoC solutions project run (requires Node 16 LTS or higher: `v16.13.0+`):

```bash
pnpx aocrunner init
```

## After installation

1. Go to the projects directory.
2. Initialize your version control system (ex: `git init`) _(optional)_
3. Add your AoC session key `AOC_SESSION_KEY` to the `.env` file (you can find it in cookie file when you sign in at [adventofcode.com](https://adventofcode.com/)) _(optional)_
4. Customize your template folder `src/template` _(optional)_
5. Start solving the puzzles by running `start <day_number>` command with your package manager, for example:

```bash
pnpm start 1
```
