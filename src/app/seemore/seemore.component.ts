import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-seemore',
  imports: [],
  templateUrl: './seemore.component.html',
  styleUrl: './seemore.component.css'
})
export class SeemoreComponent {
  movieDetails: any = null;
  loading: boolean = true;
  error: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private user: UserService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      // Lấy thông tin chi tiết phim
      this.user.getMovieDetails(+id).subscribe({
        next: (data) => {
          this.movieDetails = data;
          this.loading = false;
          // console.log('Movie details:', this.movieDetails);
          
          // Lấy trailer phim nếu có
        },
        error: (error : any) => {
          console.error('Error fetching movie details:', error);
          this.loading = false;
          this.error = true;
        }
      });
    }
  }
  getPosterUrl(posterPath: string): string {
    return posterPath 
      ? `https://image.tmdb.org/t/p/w500${posterPath}`
      : 'assets/images/no-poster.jpg';
  }


}
