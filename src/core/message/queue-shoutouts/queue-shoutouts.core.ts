import { get } from "lodash";
import { s } from "../../..";
import { MessageModuleParams } from "../../../models/module/message-module-params.model";

export function QueueShoutoutsCore(params: MessageModuleParams) {
  return;
  recursiveShoutout(params.message.args, 0);
};

const recursiveShoutout = (params: string[], index: number): void => {
  s.cli.say(s.channel, `/shoutout ${params[index]}`);

  if (!!get(params, index + 1)) {
    setTimeout(() => {
      recursiveShoutout(params, index + 1);
    }, 130000);
  }
};
