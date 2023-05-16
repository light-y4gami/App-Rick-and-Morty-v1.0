import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-btn',
  templateUrl: './scroll-btn.component.html',
  styleUrls: ['./scroll-btn.component.css'],
})
export class ScrollBtnComponent implements OnInit {
  showScrollButton: boolean = false;

  // Add event listener to detect changes in window position
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY > 700) {
      // If the window position is greater than 500, show the button
      this.showScrollButton = true;
    } else {
      // If the window position is less than or equal to 500, hide the button
      this.showScrollButton = false;
    }
  }

  constructor() {}

  ngOnInit(): void {}

  getScrollPosition() {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }
}
