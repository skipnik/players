import { createReducer, on } from "@ngrx/store";
import { toggleIsStart } from "./player.actions";
import { initialPlayerState } from "./player.state";
import { Player } from "src/app/models/player.model";

export const playerReducer = createReducer(
    initialPlayerState,
    on(toggleIsStart, (state, { playerId }) => {
        console.log('on [Players] Toogle player is start');

        const updatedPlayers: Array<Player> = state.players.map(
            player => {
                if (player.id === playerId) {
                    player.toogleIsStart();
                }
                return player;
            }
        );

        return {
            ...state,
            players: updatedPlayers
        };
    })
);