import { Component } from '@angular/core';

@Component({
  selector: 'equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent{
  onWeapons = true;
  equipmentType = 'weapons';
}
