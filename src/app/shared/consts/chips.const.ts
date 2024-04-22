import { CHIPS } from '../enums/chips.enum';

export const chips: { name: string; color: string; icon: string; title: string }[] = [
  { name: CHIPS.WINNER, color: 'success', icon: 'thumbs-up-sharp', title: 'This player has more wins than losses in the last 10 games' },
  { name: CHIPS.LOSER, color: 'danger', icon: 'thumbs-down-sharp', title: 'This player has more losses than wins in the last 10 games' },
  { name: CHIPS.HIGH_DMG, color: 'success', icon: 'thumbs-up-sharp', title: 'This player has dealt a lot of damage in the last 10 games' },
  { name: CHIPS.LOW_DMG, color: 'danger', icon: 'thumbs-down-sharp', title: 'This player has dealt few damage in the last 10 games' },
  { name: CHIPS.HIGH_VISION, color: 'success', icon: 'thumbs-up-sharp', title: 'This player has a good vision score in the last 10 games' },
  { name: CHIPS.LOW_VISION, color: 'danger', icon: 'thumbs-down-sharp', title: 'This player has a low vision score in the last 10 games' },
  { name: CHIPS.HIGH_CS, color: 'success', icon: 'thumbs-up-sharp', title: 'This player has a high amount of CS in the last 10 games' },
  { name: CHIPS.LOW_CS, color: 'danger', icon: 'thumbs-down-sharp', title: 'This player has a low amount of CS in the last 10 games' },
  { name: CHIPS.HIGH_DEATHS, color: 'danger', icon: 'thumbs-down-sharp', title: 'This player has a high death rate in the last 10 games' },
  { name: CHIPS.LOW_DEATHS, color: 'success', icon: 'thumbs-up-sharp', title: 'This player has a low death rate in the last 10 games' },
  { name: CHIPS.HIGH_ASSISTS, color: 'success', icon: 'thumbs-up-sharp', title: 'This player has a lot of assists in the last 10 games' },
  { name: CHIPS.LOW_ASSISTS, color: 'danger', icon: 'thumbs-down-sharp', title: 'This player has few assists in the last 10 games' },
  { name: CHIPS.HIGH_KILL_COUNT, color: 'success', icon: 'thumbs-up-sharp', title: 'This player has a lot of kills in the last 10 games' },
  { name: CHIPS.LOW_KILL_COUNT, color: 'danger', icon: 'thumbs-down-sharp', title: 'This player has few kills in the last 10 games' }
];
