import { createSelector } from "@ngrx/store";
import { AppState, PlayerState } from "./player.state";

export const selectPlayers = (state: AppState) => state.playerState;

export const selectPlayersCount = createSelector(
    selectPlayers,
    (playerState: PlayerState) => playerState.players
);
