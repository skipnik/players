import { NgIf } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { Store } from "@ngrx/store";
import { Player } from "src/app/models/player.model";
import { toggleIsStart } from "src/app/state/player-state/player.actions";
import { AppState } from "src/app/state/player-state/player.state";

@Component({
    standalone: true,
    selector: 'player-item',
    templateUrl: './player-item.component.html',
    styleUrls: ['./../player-list/player-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        NgIf
    ]
})
export class PlayerItem {
    @Input()
    player: Player | null = null;

    store: Store;

    constructor(private st: Store<AppState>) {
        this.store = st;
    }

    onPlayerClick(id: string) {
        this.store.dispatch(toggleIsStart({ playerId: id }));
    }
}