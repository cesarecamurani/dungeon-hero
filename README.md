![Alt text](/static/images/dh-logo.png?raw=true "Screenshot")

[Team](#team) | [Setup](#setup) | [Tests](#tests) | [Build](#build) | [Coverage](#coverage) | [Story](#story) | [Team](#team) | [Story](#story) |


## Team

* Leon Cross        <a href="https://github.com/leoncross/">https://github.com/leoncross/</a>
* Darryl Banks      <a href="https://github.com/zombie9">https://github.com/zombie9</a>
* Luca Eto          <a href="https://github.com/lucafrancesc/">https://github.com/lucafrancesc/</a>
* Cesare Camurani   <a href="https://github.com/cesarecamurani/">https://github.com/cesarecamurani/</a>

## Story

A player (with improvable attributes), has to escape a two-room dungeon.
In the first room is a monster. If the player successfully defeats this monster (with a turn-based, RPG style combat system), the player will move into the final room where they escape and win the game.



## How to run

clone the terminal
type the following in your console:
```
npm install

npm run test
```

copy the game.html file and open it in your browser

## Build

[![Build Status](https://travis-ci.com/leoncross/team-rogue.svg?branch=master)](https://travis-ci.com/leoncross/team-rogue)

## Coverage

[![Coverage Status](https://coveralls.io/repos/github/leoncross/team-rogue/badge.svg?branch=master)](https://coveralls.io/github/leoncross/team-rogue?branch=master)

## Setup
#### How to get started with the project
npm init
npm install
npm install -g jasmine
jasmine init

## Tests
#### How to test the project

to get coverage
```
istanbul cover --include-all-sources jasmine
```

- to push??
```
istanbul cover --include-all-sources jasmine && cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js && rm -rf ./coverage
```


Trap room - has a 20% chance of occuring (not including when you fight a boss; trap room will never replace a boss fight)

// normal attack: 0 modifiers

// insane attack:
  // player:
    // -5 to rollDice - ON PLAYER ATTACK SEQUENCE
    // 50% damage increase - ON PLAYER ATTACK SEQUENCE

// quick attack:
  // player:
    // 50% damage decrease - ON PLAYER ATTACK SEQUENCE
  // monster:
    // +5 to minimumRoll - ON MONSTER ATTACK SEQUENCE


// attack sequence always stays the same (you pass it the modifiers)
// monster attack (accepts modifiers)
// hero attack (accepts modifiers)

normal attack = combat.attackSequence(0, 1 ,0, 0)
insane attack = combat.attackSequence(-5, 0.5, 0, 0)
quick attack = combat.heroAttack(0, 2, 5, 0)
health potion = combat.attackSequence(0, 1 ,0, 'health')

missing:
from combat, updater the player class with new player stats(health)

feature ideas:
- special moves
- loot table
- longer fight goes on, more damage they do (i.e., bat swarm)
