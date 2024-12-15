import { s } from "../../..";
import { PhaseExeggutor } from "../../../models/phase/phase";
import { MessageModuleFnType } from "../../../models/module/message-module-fn.type";
import { MessageModuleParams } from "../../../models/module/message-module-params.model";
import { RandomPokemonExeggutor } from "../../../models/random-pokemon/random-pokemon";

export const ShinyPhaseCore: MessageModuleFnType = async (params: MessageModuleParams) => {
  const count = new PhaseExeggutor().exeggcute();
  await new RandomPokemonExeggutor().exeggcute().then((pokemon) => {
    if (!!pokemon) {
      s.cli.say(
        params.channel,
        `${params.userstate["display-name"]} got a Shiny ${pokemon?.name[0].toUpperCase()}${pokemon?.name.slice(1)} in ${count} encounters.`
      );
    }
  });
}
