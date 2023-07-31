import { createAction, props } from "@ngrx/store";

export const toggleIsStart = createAction('[Players] Toogle player is start', props<{ playerId: string }>());