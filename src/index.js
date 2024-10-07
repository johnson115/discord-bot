require("dotenv").config();
const { Client, IntentsBitField } = require("discord.js");
const { joinVoiceChannel, createAudioPlayer, createAudioResource } = require('@discordjs/voice');
const ytdl = require('ytdl-core');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
    IntentsBitField.Flags.GuildVoiceStates,
  ],
});

client.on("ready", async (c) => {
  console.log(`✅ ${c.user.username} is here 🤓🧐`);
  const guild = client.guilds.cache.first();
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return; 
  if (message.author.username === "raiin1780") return;
  if (
    message.content.includes("asba") &&
    message.author.username === "johnson_zrz"
  ) {
    message.react("😂");
    message.reply("johnson 3arfy mansebouch ya3tikom asba lkol 😎");
  }
  
  if (message.content.includes("play samara")) {
    const voiceChannel = message.member.voice.channel; // Get the voice channel the user is in
    if (voiceChannel) {
        try {
            const connection = joinVoiceChannel({
                channelId: voiceChannel.id,
                guildId: message.guild.id,
                adapterCreator: message.guild.voiceAdapterCreator,
            });

            const player = createAudioPlayer();

            // Use ytdl-core to create a resource from the YouTube URL
            const resource = createAudioResource(ytdl('https://www.youtube.com/watch?v=WK0vO2b4Wjw', { filter: 'audioonly' }));

            connection.subscribe(player);
            player.play(resource);

            message.reply(`✅ Joined your voice channel and playing Samara!`);

            player.on('finish', () => {
                connection.disconnect(); // Leave the voice channel after playing
            });

        } catch (error) {
            console.error(`Could not join voice channel: ${error}`);
            message.reply(`❌ Unable to join the voice channel.`);
        }
    } else {
        message.reply(`❌ You need to be in a voice channel to play music.`);
    }
}

if (message.author.username === "johnson_zrz") return;

  if (message.content.includes("hello") || message.content.includes("Hello") ) {
    message.reply(`✅ Hello ${message.author.username} fy serveur hedha na3mlo jaw nal3bo nashro nchikho na9raw 
            le7tiram  aham haja n9adro b3adhna. 
            saben om la 
            sfeha matkathrech 
            kol matsfah raw  chnjewbek bech tetdhaker 
            mar7be byk  7dhena wasba lik 🤝👃🦻`);
  }
  if (message.content.includes("merci")) {
    message.react("🙏");
    message.reply("wyezi ble t7in bra 3ich m3a s7abek 🕊✌");
  }
  if (message.content.includes("bra nik omek")) {
    message.react("😡");

    message.reply(
      "tasfah wtaya7 la9dar n3aryouk. tab9a mnayek wmekch rajel haw chna3ml update wely yasfah niko nbannew zok omo ya tahan"
    );
  }
  if (
    message.content.includes("asba") &&
    message.author.username !== "johnson_zrz"
  ) {
    message.react("😡");
    message.reply(`asba fy sormek ye ${message.author.username} ye tahan 🥒`);
  }
  if (
    message.content.includes("zab") ||
    message.content.includes("zaab") ||
    message.content.includes("zaaab") ||
    message.content.includes("nam")
  ) {
    message.react("😡");
    message.reply(
      "madem t9oul fy sfeha rak mnayek wta7an w rkhiss farkh fesed ou miboun haw n7adhro fy update chnbanew la3bed lmnayka ely kifek"
    );
  }
  if (message.content.includes("zeby") || message.content.includes("zebi")) {
    message.react("😡");
    message.reply(` 
            1- awalan ${message.author.username} andouch zeb wheka aleh maghroum byh wyahki alyh 
            2-thanyan madem t9oul fy sfeha rak mnayek wta7an w rkhiss farkh fesed ou miboun haw n7adhro fy update chnbanew la3bed lmnayka ely kifek 😡`);
  }
 
  if (
    message.content.includes("nayek") ||
    message.content.includes("nayeek") ||
    message.content.includes("nayeeek") ||
    message.content.includes("nayikkk")||
    message.content.includes("tnayeeek")
  ) {
    message.react("😡");
    message.reply(` ye ${message.author.username} matnajem temchy tnayek ken enty e7tarem rouhek wshabek  wna9es bl wsakh 😡  . 
            . le7tiram wejeb 🙋‍♂️  `);
  }
  if (
    message.content.includes("nik") ||
    message.content.includes("niik") ||
    message.content.includes("niiik") ||
    message.content.includes("tnik") ||
    message.content.includes("tniik")
  ) {
    message.react("😡");
    message.reply(`1- awalan  ${message.author.username} rak mata9darech alyh enik  🥒
            2- na9es ble sfeha wa7tram rouhek was7abek chne7tarmoouk  sinon lupdate ejey  nbanewek 
            . le7tiram wejeb 🙋‍♂️`);
  }
  if (message.content.includes("miboun")) {
    message.react("😡");
    message.reply(
      `${message.author.username} mal miboun ken enty   mach tseb   7ad  bech la3bed t9adrek  wadh7in dhaherli aya peace`
    );
  }
 
  if (
    message.content.includes("ala khyr") ||
    message.content.includes(" ala khir") ||
    message.content.includes("ala khyr") ||
    message.content.includes("bnuit")
  ) {
    message.react("😡");
    message.reply(" tasba7 ala bhim wmenghyr kharta  stay healthy 💪🦵");
  }
  if (
    message.content.includes("chabeb") ||
    (message.content.includes("louled") &&
      message.author.username === "johnson_zrz")
  ) {
    message.reply("@everyone  winkom 3arfy 7achto bykom ");
  }
});

client.login(process.env.TOKEN);
