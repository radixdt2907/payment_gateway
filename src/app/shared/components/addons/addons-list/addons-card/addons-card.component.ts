import { Component, Input } from '@angular/core';
import AddonsModel from 'src/app/shared/models/addons.model';
import { CurrSelectedDataService } from 'src/app/shared/services/currSelectedData/curr-selected-data.service';

@Component({
  selector: 'app-addons-card',
  templateUrl: './addons-card.component.html',
  styleUrls: ['./addons-card.component.css'],
})
export class AddonsCardComponent {
  @Input() addon!: AddonsModel;
  @Input() index!: number;

  constructor(protected currSelectedUser: CurrSelectedDataService) {}

  protected handleAddOnClick = (addon_code: string, event: Event): void => {
    const inputElem: HTMLInputElement = event.target as HTMLInputElement;

    if (inputElem.checked) this.currSelectedUser.addAddon(addon_code);
    else this.currSelectedUser.removeAddon(addon_code);
  };
}
