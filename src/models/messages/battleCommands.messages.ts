import { CommandsEnum } from "../enums/commands.enum";

export const BATTLE_COMMANDS = [
  `"${CommandsEnum.battleCommands}" to list the commands.`,
  `"${CommandsEnum.enterLobby}" to enter a battle.`,
  `"${CommandsEnum.choosePokemon} + POKEMON_NAME" to choose a Pokemon.`,
  `"${CommandsEnum.attack} + ATTACK_NAME" to attack your opponent.`,
];
