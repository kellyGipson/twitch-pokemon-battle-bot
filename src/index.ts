import { Client } from 'tmi.js';
import { BOT_AUTH } from './config/bot-auth';

const client: Client = Client(BOT_AUTH);

client.connect();

client.on('message', (channel, tags, message, self) => {
  if (!!BOT_AUTH.channels) {
    client.say(BOT_AUTH.channels[0], 'Hello World')
  }
});
