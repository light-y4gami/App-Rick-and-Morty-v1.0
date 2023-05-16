import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-slide',
  templateUrl: './carousel-slide.component.html',
  styleUrls: ['./carousel-slide.component.css'],
})
export class CarouselSlideComponent implements OnInit {
  urlImage: string[] = [
    '../../../assets/banner-1.jpg',
    '../../../assets/banner-2.jpg',
    '../../../assets/banner-3.jpg',
    '../../../assets/banner-4.jpg',
    '../../../assets/banner-5.jpg',
    '../../../assets/banner-6.jpg',
    '../../../assets/banner-7.jpg',
    '../../../assets/banner-8.jpg',
    '../../../assets/banner-9.jpg',
  ];

  currentImage: string = '../../../assets/banner-1.jpg';
  activeIndex: number = 0; // keeps the index of the currently active image
  intervalId: any;
  isPaused: boolean = false;

  carouselSlide() {
    let timeout: number = 4000;
    let currentIndex = 0;

    this.intervalId = setInterval(() => {
      this.currentImage = this.urlImage[currentIndex];
      this.activeIndex = currentIndex;

      // make sure the buttons were found before trying to manipulate their classes
      const prevIndex =
        currentIndex === 0 ? this.urlImage.length - 1 : currentIndex - 1;
      const prevButton = document.querySelector(
        `#carouselExampleIndicators [data-bs-slide-to="${prevIndex}"]`
      );
      prevButton?.classList.remove('active');

      const newButton = document.querySelector(
        `#carouselExampleIndicators [data-bs-slide-to="${currentIndex}"]`
      );
      newButton?.classList.add('active');

      currentIndex++;

      if (currentIndex >= this.urlImage.length) {
        currentIndex = 0;
      }
    }, timeout);
  }

  ngOnInit(): void {
    this.carouselSlide();

    window.addEventListener('scroll', () => {
      const scrollTo = window.scrollY || document.documentElement.scrollTo;

      //  if scrollTo is greater than 65px and isPaused is false, stop the interval and change the value of isPaused to true
      if (typeof scrollTo === 'number' && scrollTo > 65) {
        if (!this.isPaused) {
          clearInterval(this.intervalId);
          this.isPaused = true;
        }
      } else {
        if (this.isPaused) {
          // if you're not past 65px and you're paused, resume the carousel
          this.carouselSlide();
          this.isPaused = false;
        }
      }
    });
  }
}
