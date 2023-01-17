import { CommandsEnum } from '../enums/commands.enum'

export function listBattleCommands(cmd: string): boolean {
  return cmd === CommandsEnum.battleCommands;
}

export function enterBattle(cmd: string): boolean {
  return cmd === CommandsEnum.enterLobby;
}

export function choosePokemon(cmd: string): boolean {
  return cmd === CommandsEnum.choosePokemon;
}

export function attack(cmd: string): boolean {
  return cmd === CommandsEnum.attack;
}

export function shinyRoll(cmd: string): boolean {
  return cmd === CommandsEnum.shinyroll;
}