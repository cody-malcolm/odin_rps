# Rock Paper Scissors

## Objective

Create a simple Rock Paper Scissors page.

## Project Overview

This is ordinarily a two-part project, first without a UI and later with a UI added. I alread did this project [once before](https://github.com/codyMalcolm/rock_paper_scissors), but when reviewing my previous solution I saw enough areas to improve on to redo the project. However, I'm going to go straight to the UI version, and will modify the specifications accordingly.

#### Specifications

##### Main

1. Project should utilize Git and GitHub.
2. Should have a "simple UI" using buttons.
3. There are some basic but specific requirements of how the functionality of the program should be structured:
 * A function should be created to take two inputs representing the player/computer selections and will return a result based on the winner.
 * The returned result should specify whether the player wins and what the selections were.
 * The game should be played until a player gets 5 points.
 * Event listeners should be used (as opposed to `selector.onclick`)
4. All output should be displayed to the document, not the console.

##### Ambiguous

1. No mention is given as to how to handle ties.

#### Learning Objectives

Gain experience working with:
* Functions
* Built-in libraries (`Math.random()`)
* Control flow
* JavaScript syntax
* Git and GitHub
* The Document-Object Model

## Author's Notes

#### Preliminary Thoughts

Essentially I am just going to redo this project with a bit more terse logic and taking advantage of removing the contraint about having to return the result as a string. Instead, I will use an object, which would be a much better way to do the implementation thinking of theoretical future modifications. Parsing strings makes it very difficult to change much when the logic of the program is contingent on the exact index of specific words in the string. In a sense, this could be seen as an opportunity to "beat my best time."

#### Final Thoughts


## Miscellaneous

Read more about this project at [The Odin Project.](https://www.theodinproject.com/courses/web-development-101/lessons/rock-paper-scissors)
