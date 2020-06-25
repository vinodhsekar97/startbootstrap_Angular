import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  imageUrl = 'https://picsum.photos/1020/200?about';
  constructor() {}

  ngOnInit(): void {}
}