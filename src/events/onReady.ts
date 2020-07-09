import { Client, ActivityOptions } from 'discord.js';

const onReady = (bot: Client, prefix: string) => {
  if (!bot.user) {
    return;
  }

  console.log(`Bot logged as ${bot.user.username}`);

  const presences: ActivityOptions[] = [
    {
      type: 'PLAYING',
      name: `${prefix}info`,
    },
    {
      type: 'LISTENING',
      name: 'FaztTech en YouTube',
    },
    {
      type: 'LISTENING',
      name: 'FaztCode en YouTube',
    },
    {
      type: 'WATCHING',
      name: 'código de conducta',
    },
  ];

  let i: number = 0;
  setInterval(async () => {
    if (!bot.user) {
      return;
    }

    await bot.user.setActivity(presences[i]);

    if (i === (presences.length - 1)) {
      i = 0;
    } else {
      i++;
    }
  }, 10000);
};

export default onReady;
