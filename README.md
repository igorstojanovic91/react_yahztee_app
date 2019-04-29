# react_yahztee_app
Building responsive Yahztee game with react

<h2>The Game</h2>
Yahtzee is a chance-and-strategy dice rolling game. A game is played over 13 rounds.

Each round, the player rolls five 6-sided dice. They may click on any number of dice to “freeze” or “unfreeze” them (frozen dice are displayed in a different color). They may re-roll the unfrozen dice up to 2 times.

Each round, they must assign their dice to any unclaimed scoring category. Each category scores differently.

After 13 rounds, the game is over, and the player’s score is the total of each scoring category.

<table border="1" class="docutils">
<colgroup>
<col width="25%" />
<col width="51%" />
<col width="24%" />
</colgroup>
<thead valign="bottom">
<tr class="row-odd"><th class="head">Category</th>
<th class="head">Description</th>
<th class="head">Example Score</th>
</tr>
</thead>
<tbody valign="top">
<tr class="row-even"><td><strong>Ones</strong></td>
<td>Score 1 for every 1</td>
<td><code class="docutils literal notranslate"><span class="pre">1</span> <span class="pre">1</span> <span class="pre">2</span> <span class="pre">3</span> <span class="pre">4</span></code> = 2</td>
</tr>
<tr class="row-odd"><td><strong>Twos</strong></td>
<td>Score 2 for every 2</td>
<td><code class="docutils literal notranslate"><span class="pre">1</span> <span class="pre">2</span> <span class="pre">2</span> <span class="pre">3</span> <span class="pre">4</span></code> = 4</td>
</tr>
<tr class="row-even"><td><strong>Threes</strong></td>
<td>Score 3 for every 3</td>
<td><code class="docutils literal notranslate"><span class="pre">1</span> <span class="pre">2</span> <span class="pre">3</span> <span class="pre">3</span> <span class="pre">3</span></code> = 9</td>
</tr>
<tr class="row-odd"><td><strong>Fours</strong></td>
<td>Score 4 for every 4</td>
<td><code class="docutils literal notranslate"><span class="pre">1</span> <span class="pre">2</span> <span class="pre">4</span> <span class="pre">4</span> <span class="pre">5</span></code> = 8</td>
</tr>
<tr class="row-even"><td><strong>Fives</strong></td>
<td>Score 5 for every 5</td>
<td><code class="docutils literal notranslate"><span class="pre">1</span> <span class="pre">2</span> <span class="pre">5</span> <span class="pre">5</span> <span class="pre">5</span></code> = 15</td>
</tr>
<tr class="row-odd"><td><strong>Sixes</strong></td>
<td>Score 6 for every 6</td>
<td><code class="docutils literal notranslate"><span class="pre">1</span> <span class="pre">2</span> <span class="pre">3</span> <span class="pre">6</span> <span class="pre">6</span></code> = 12</td>
</tr>
<tr class="row-even"><td><strong>3 of Kind</strong></td>
<td>If 3+ of one value, score sum of all
dice (otherwise, score 0)</td>
<td><code class="docutils literal notranslate"><span class="pre">1</span> <span class="pre">2</span> <span class="pre">3</span> <span class="pre">3</span> <span class="pre">3</span></code> = 12</td>
</tr>
<tr class="row-odd"><td><strong>4 of Kind</strong></td>
<td>If 4+ of one value, score sum of all
dice (else 0)</td>
<td><code class="docutils literal notranslate"><span class="pre">1</span> <span class="pre">2</span> <span class="pre">2</span> <span class="pre">2</span> <span class="pre">2</span></code> = 8</td>
</tr>
<tr class="row-even"><td><strong>Full House</strong></td>
<td>If 3 of one value and 2 of another,
score 25 (else 0)</td>
<td><code class="docutils literal notranslate"><span class="pre">2</span> <span class="pre">2</span> <span class="pre">3</span> <span class="pre">3</span> <span class="pre">3</span></code> = 25</td>
</tr>
<tr class="row-odd"><td><strong>Small Straight</strong></td>
<td>If 4+ values in a row, score 30
(else 0)</td>
<td><code class="docutils literal notranslate"><span class="pre">1</span> <span class="pre">2</span> <span class="pre">3</span> <span class="pre">4</span> <span class="pre">6</span></code> = 30</td>
</tr>
<tr class="row-even"><td><strong>Large Straight</strong></td>
<td>If 5 values in a row, score 40
(else 0)</td>
<td><code class="docutils literal notranslate"><span class="pre">1</span> <span class="pre">2</span> <span class="pre">3</span> <span class="pre">4</span> <span class="pre">5</span></code> = 40</td>
</tr>
<tr class="row-odd"><td><strong>Yahtzee</strong></td>
<td>If all values match, score 50 (else 0)</td>
<td><code class="docutils literal notranslate"><span class="pre">2</span> <span class="pre">2</span> <span class="pre">2</span> <span class="pre">2</span> <span class="pre">2</span></code> = 50</td>
</tr>
<tr class="row-even"><td><strong>Chance</strong></td>
<td>Score sum of all dice</td>
<td><code class="docutils literal notranslate"><span class="pre">1</span> <span class="pre">2</span> <span class="pre">3</span> <span class="pre">4</span> <span class="pre">6</span></code> = 16</td>
</tr>
</tbody>
</table>

<h2>Example Round</h2>
The initial roll is: 2 4 3 2 5.

The player decides to try to get as many twos as possible, and clicks to freeze both twos, then re-rolls, getting a new 2 3 5. They now have: 2 2 3 2 5.

The player decides to try for a full house, and freezes all of their twos and their three (hoping to roll another 3 to get a full house). They re-roll the die showing five, getting a 6 and now have 2 2 3 2 6.

Sadly, they didn’t get their full house. They could score this as:

Twos: for 6 points
Threes for 3 points
Sixes: for 6 points
Three of Kind: (twos) for 15 points
Chance: for 15 points
Any other category they claimed on this round would score 0.

<h2>Tasks</h2>
Part Zero: Run the Solution and Play
Play a game or two to get a sense of how things should work — this is the version you’ll be working to build.

<h3>Part One: Draw Diagram of Components</h3>
Read through the source code and make a diagram of the components, along with their props and state.

As you read the code, think about which areas felt very easy to understand, and whether there were things that took a minute to understand.

<h3>Part Two: Fix Clicking Dice</h3>
You’re supposed to click dice to toggle whether or not they’re going to be re-rolled. Unfortunately, this doesn’t work right now!

Figure out what’swrong or missing with the code for this feature and fix it!

<h3>Part Three: Read Rules.js</h3>
The system for evaluating a roll score is handled by a series of object oriented classes, since many of the rules are similar to each other.

Familiarize yourself with how this works, because up next you’ll be fixing some rules…

<h3>Part Four: Add Missing Rules</h3>
Two evaluation rule classes in Rules.js are incomplete:

a full house should be 3 of one die and 2 of another, and should always score 25
a small straight is four dice in a row (1-2-3-4 or 2-3-4-5, for example), and should always score 30
Write the classes for these rules.

<h3>Part Five: Prevent Rolling More than 3 Times</h3>
You should only get two chances per turn to re-roll, but the game has a bug where you can re-roll as often as you want as long as you unlock some of the dice first. Fix it!

<h3>Part Six: Disallow Re-Using The Score Line</h3>
The game currently lets you keep re-scoring the same scoring line (so you can score 3 of a kind several times, whereas you should only be able to allocate one set of dice here.) Fix it!! (I’ve provided classes called RuleRow-active and RuleRow-disabled that you can use for styling purposes).

<h3>Part Seven: Add Descriptions</h3>
Add a description to each rule to explain how it’s scored (for example: “25 points for a full house”), and have it display before the user has clicked on a rule row. Once the user clicks a row, hide the description and instead display the score value.

<h3>Part Eight: Add Icons</h3>
Instead of rendering each Die as a simple number in a box, rewrite the code to use font-awesome die icons. You’ll need to include font-awesome, either using a CDN or try finding a node module to help! The classes you should use are: “fas fa-dice-one”, “fas fa-dice-two”, “fas fa-dice-three”, etc.

<h3>Part Nine: Animate The Dice!</h3>
This part is a little tricky! Make the Dice shake or spin when they are being rolled. Don’t worry about creating particularly beautiful animations. Make sure that a user cannot click on a Die to select it while the animation is going on.
