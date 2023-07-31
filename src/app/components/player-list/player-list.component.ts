import { AsyncPipe, NgFor, NgIf } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Observable } from "rxjs";
import { Player } from "src/app/models/player.model";
import { PlayerItem } from "../player-item/player-item.component";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/state/player-state/player.state";
import { selectPlayersCount } from "src/app/state/player-state/player.selectors";

@Component({
    standalone: true,
    selector: 'player-list',
    templateUrl: './player-list.component.html',
    styleUrls: ['./player-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        NgIf,
        NgFor,
        AsyncPipe,
        PlayerItem
    ]
})
export class PlayrList {

    list$: Observable<Array<Player>>;

    constructor(private store: Store<AppState>) {
        this.list$ = store.select(selectPlayersCount);
    }
}