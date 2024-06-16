import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NewItemsComponent } from "./new-items.component";
import { NgbCarouselModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [NewItemsComponent],
  imports: [CommonModule, NgbCarouselModule],
})
export class NewItemsModule {}
