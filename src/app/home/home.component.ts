import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule]
})
export class HomeComponent {
  menProducts = [
    { name: 'Áo thun nam trắng', price: 199000, image: 'https://picsum.photos/200?random=1' },
    { name: 'Áo len xanh', price: 299000, image: 'https://picsum.photos/200?random=2' },
    { name: 'Áo thể thao', price: 259000, image: 'https://picsum.photos/200?random=3' },
    { name: 'Áo len cổ lọ', price: 319000, image: 'https://picsum.photos/200?random=4' }
  ];

  womenProducts = [
    { name: 'Áo len nữ', price: 269000, image: 'https://picsum.photos/200?random=5' },
    { name: 'Áo nỉ hồng', price: 229000, image: 'https://picsum.photos/200?random=6' },
    { name: 'Áo đen nữ', price: 279000, image: 'https://picsum.photos/200?random=7' },
    { name: 'Áo len vàng', price: 289000, image: 'https://picsum.photos/200?random=8' }
  ];

  kidsProducts = [
    { name: 'Áo bé trai xám', price: 159000, image: 'https://picsum.photos/200?random=9' },
    { name: 'Áo bé gái trắng', price: 149000, image: 'https://picsum.photos/200?random=10' },
    { name: 'Áo tím bé trai', price: 139000, image: 'https://picsum.photos/200?random=11' },
    { name: 'Áo len bé gái', price: 169000, image: 'https://picsum.photos/200?random=12' }
  ];
}
