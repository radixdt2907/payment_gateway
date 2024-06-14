import { Component } from '@angular/core';
import { CurrSelectedDataService } from '../../services/currSelectedData/curr-selected-data.service';

@Component({
  selector: 'app-addons',
  templateUrl: './addons.component.html',
  styleUrls: ['./addons.component.css'],
})
export class AddonsComponent {
  constructor(protected currSelectedUser: CurrSelectedDataService) {}
}