import { CommandsEnum } from './commands.enum'

export function isListBattleCommandsCmd(cmd: string): boolean {
  return cmd === CommandsEnum.battleCommands;
}

export function isEnterBattleCmd(cmd: string): boolean {
  return cmd === CommandsEnum.enterLobby;
}

export function isChoosePokemonCmd(cmd: string): boolean {
  return cmd === CommandsEnum.choosePokemon;
}

export function isAttackCmd(cmd: string): boolean {
  return cmd === CommandsEnum.attack;
}

export function isShinyRollCmd(cmd: string): boolean {
  return cmd === CommandsEnum.shinyroll;
}

export function isSubRollCmd(cmd: string): boolean {
  return cmd === CommandsEnum.subroll;
}