const { App } = require("@slack/bolt");

const app = new App({
  token: "xoxb-3499222920212-5433864155763-zwsXpGJnpLxwwlyzPjJka2Fx",
  signingSecret: "e01d64ca0c19ad3219cc3367855837a9",
  socketMode: true,
  appToken:
    "xapp-1-A05CUC3L944-5434066261235-d41a092d60363d2dbb60e39e2d9b1cb91251d976e2e9bf13ddbc9f5f0fdd3c47",
});

const prompts = [
  "Za to může",
  "Nevím že je meeting, za to může",
  "Přišel mi mail 10x, za to může",
  "Nebyl jsem na meeting, za to může",
  "Nemam schválené zadání, za to může",
  "Vývovj nedodal, za to může",
  "Mac client nefunguje s outlook, říkal jsem to, za to může"
];

app.command("/bullshit", async ({ command, ack, say }) => {
  try {
    await ack();
    say(`${prompts[(Math.floor(Math.random() * prompts.length))]} :vk:`);
  } catch (err) {
    console.log("err");
    console.error(err);
  }
});

app.command("/apple", async ({ command, ack, say }) => {
  try {
    await ack();
    say('Musím si koupit Vision PRO. :man-heart-man:');
  } catch (err) {
    console.log("err");
    console.error(err);
  }
});

app.command("/brno", async ({ command, ack, say }) => {
  try {
    await ack();
    say('Co to je? Za to beztak může :vk: :brno:');
  } catch (err) {
    console.log("err");
    console.error(err);
  }
});

app.start(3000);
