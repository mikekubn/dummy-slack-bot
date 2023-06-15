const { App } = require("@slack/bolt");
require('dotenv').config()

const app = new App({
  token: process.env.SLACK_TOKE,
  signingSecret: process.env.SLACK_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
});

const prompts = [
  "Za to může",
  "Nevím že je meeting, za to může",
  "Přišel mi mail 10x, za to může",
  "Nebyl jsem na meeting, za to může",
  "Nemam schválené zadání, za to může",
  "Vývovj nedodal, za to může",
  "Mac client nefunguje s outlook, říkal jsem to, za to může",
];

app.command("/bullshit", async ({ command, ack, say }) => {
  try {
    await ack();
    say(`${prompts[Math.floor(Math.random() * prompts.length)]} :vk:`);
  } catch (err) {
    console.log("err");
    console.error(err);
  }
});

app.command("/apple", async ({ command, ack, say }) => {
  try {
    await ack();
    say("Musím si koupit Vision PRO. :man-heart-man:");
  } catch (err) {
    console.log("err");
    console.error(err);
  }
});

app.command("/brno", async ({ command, ack, say }) => {
  try {
    await ack();
    say("Co to je? Za to beztak může :vk: :brno:");
  } catch (err) {
    console.log("err");
    console.error(err);
  }
});

(async () => {
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app is running!');
})();
