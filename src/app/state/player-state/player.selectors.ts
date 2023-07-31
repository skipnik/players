import { createSelector } from "@ngrx/store";
import { AppState, PlayerState } from "./player.state";
import { Player } from "src/app/models/player.model";

export const playerState = (state: AppState) => state.playerState;

export const playersSelector = createSelector(
    playerState,
    (playerState: PlayerState) => playerState.players
);

export const playersInStartAmountSelector = createSelector(
    playerState,
    (playerState: PlayerState) => playerState.players.filter(
        (player: Player) => player.isStart
    ).length
);