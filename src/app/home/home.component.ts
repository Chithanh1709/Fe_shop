import { Component } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule]
})
export class HomeComponent {
  nowShowing: any[] = [];
  visibleMovies: any[] = [];
  currentIndex = 0;
  itemsPerSlide = 3;
  currentPage = 1;
  totalPages = 1;

  ngOnInit() {
    this.loadMovies();
  }

  constructor(private viewportScroller: ViewportScroller,
              private user: UserService
  ) { }

  scrollToSection(sectionId: string) {
    this.viewportScroller.scrollToAnchor(sectionId);
  }

  loadMovies(): void {
     this.user.getMovies(1).subscribe(data => {
      this.nowShowing = data.results;
      this.updateVisibleMovies();
    });
  }

  getMoviePoster(posterPath: string): string {
    return posterPath
      ? `https://image.tmdb.org/t/p/w500${posterPath}`
      : 'assets/no-image.jpg'; // Ảnh mặc định khi không có poster
  }

  changePage(newPage: number): void {
    this.currentPage = newPage;
    this.loadMovies();
    window.scrollTo(0, 0);
  }

  updateVisibleMovies(): void {
    this.visibleMovies = this.nowShowing.slice(this.currentIndex, this.currentIndex + this.itemsPerSlide);
  }

  nextSlide(): void {
    if (this.currentIndex + this.itemsPerSlide < this.nowShowing.length) {
      this.currentIndex += this.itemsPerSlide;
      this.updateVisibleMovies();
    }
  }

  prevSlide(): void {
    if (this.currentIndex - this.itemsPerSlide >= 0) {
      this.currentIndex -= this.itemsPerSlide;
      this.updateVisibleMovies();
    }
  }

}
