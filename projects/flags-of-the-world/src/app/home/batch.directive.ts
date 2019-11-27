import { Directive, ElementRef, AfterViewInit } from "@angular/core";
import { Store } from "@ngxs/store";
import { Countries } from "../store";

@Directive({
  selector: "[home-batch]"
})
export class BatchDirective implements AfterViewInit {
  private observer: IntersectionObserver;
  constructor(private readonly el: ElementRef, private readonly s: Store) {}

  ngAfterViewInit(): void {
    this.init();
  }

  init(): void {
    this.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        this.batchCountries();
      });
    });
    this.observer.observe(this.el.nativeElement.nextElementSibling);
  }

  batchCountries(): void {
    this.s.dispatch(new Countries.Batch({ quantity: 20 }));
  }
}
