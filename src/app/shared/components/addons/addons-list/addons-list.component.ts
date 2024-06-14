import { Component, Input } from '@angular/core';
import AddonsModel from 'src/app/shared/models/addons.model';

@Component({
  selector: 'app-addons-list',
  templateUrl: './addons-list.component.html',
  styleUrls: ['./addons-list.component.css']
})
export class AddonsListComponent {

  @Input('list') public addonsList!: AddonsModel[];
}