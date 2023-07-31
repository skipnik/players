import { Player } from "src/app/models/player.model";
import { Positions } from "src/app/models/player.structure";

export interface AppState {
    playerState: PlayerState;
}

export interface PlayerState {
    players: Array<Player>;
}

export const initialPlayerState: PlayerState = {
    players: [
        new Player('Thibaut Courtois', 1, Positions.GOALKEEPER, '11 May 1992'),
        new Player('Dani Carvajal', 2, Positions.DEFENDER, '11 January 1992'),
        new Player('Éder Militão', 3, Positions.DEFENDER, '18 January 1998'),
        new Player('David Alaba', 4, Positions.DEFENDER, '24 June 1992'),
        new Player('Jude Bellingham', 5, Positions.MIDFIELDER, '29 June 2003'),
        new Player('Nacho', 6, Positions.DEFENDER, '18 January 1990'),
        new Player('Vinícius Júnior', 7, Positions.FORWARD, '12 July 2000'),
        new Player('Toni Kroos', 8, Positions.MIDFIELDER, '4 January 1990', true),
        new Player('Luka Modrić', 10, Positions.MIDFIELDER, '9 September 1985', true),
        new Player('Rodrygo', 11, Positions.FORWARD, '9 January 2001'),
        new Player('Eduardo Camavinga', 12, Positions.MIDFIELDER, '10 November 2002'),

        new Player('Andriy Lunin', 13, Positions.GOALKEEPER, '11 February 1999', true),
        new Player('Federico Valverde', 15, Positions.MIDFIELDER, '22 July 1998'),
        new Player('Álvaro Odriozola', 16, Positions.DEFENDER, '14 December 1995', true),
        new Player('Lucas Vázquez', 17, Positions.DEFENDER, '1 July 1991', true),
        new Player('Aurélien Tchouaméni', 18, Positions.MIDFIELDER, '27 January 2000', true),
        new Player('Dani Ceballos', 19, Positions.MIDFIELDER, '7 August 1996', true),
        new Player('Fran García', 20, Positions.DEFENDER, '14 August 1999', true),
        new Player('Brahim Díaz', 21, Positions.FORWARD, '3 August 1999', true),
        new Player('Antonio Rüdiger', 22, Positions.DEFENDER, '3 March 1993'),
        new Player('Ferland Mendy', 23, Positions.DEFENDER, '8 June 1995', true),
        new Player('Arda Güler', 24, Positions.MIDFIELDER, '25 February 2005', true),
    ]
}