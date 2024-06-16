import { Component, ViewEncapsulation } from "@angular/core";
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";
@Component({
  selector: "ngx-new-items",
  templateUrl: "./new-items.component.html",
  styleUrls: ["./new-items.component.scss"],
  providers: [NgbCarouselConfig],
  encapsulation: ViewEncapsulation.None,
})
export class NewItemsComponent {
  // images = [700, 533, 807, 124].map(
  //   (n) => `https://picsum.photos/id/${n}/900/500`
  // );
  images = [1, 2, 3, 4].map((x) => `assets/t-shirt/${x}.png`);
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.wrap = true;
  }
}
