const readline = require('readline');
const data = {};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("What's your name? (Nicknames are also acceptable) ", (answer) => {
  data.name = answer;
  rl.question("What's an activity you like doing? ", (answer) => {
    data.activity = answer;
    rl.question("What do you listen to while doing that? ", (answer) => {
      data.music = answer;
      rl.question("Which is your favourite meal? (eg: dinner, lunch, breakfast ", (answer) => {
        data.meal = answer;
        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
          data.favMeal = answer;
          rl.question("Which sport is your absolute favourite? ", (answer) => {
            data.sport = answer;
            rl.question("What is your superpower? In a few words, tell us what you're amazing at! ", (answer) => {
              data.superPower = answer;
              rl.close();
              console.log(`\n${data.name} loves listening to ${data.music} while ${data.activity}, devouring ${data.favMeal} for ${data.meal}, prefers ${data.sport} over any other sport, and is amazing at ${data.superPower}.`);
            });
          });
        });
      });
    });
  });
});

