import { createReducer, on } from "@ngrx/store";
import { toggleIsStart } from "./player.actions";
import { initialPlayerState } from "./player.state";

export const playerReducer = createReducer(
    initialPlayerState,
    on(toggleIsStart, (state, {playerId}) => {
        console.log('on [Players] Toogle player is start');

        let tmpPlayer = state.players.find((player) => {
            return player.id === playerId
        });

        if (tmpPlayer) {
            tmpPlayer.toogleIsStart();
        }

        return state;
    }),
);