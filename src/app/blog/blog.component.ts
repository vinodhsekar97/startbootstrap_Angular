import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  data = {};
  imageUrl;
  constructor(private service: DataService, private route_: ActivatedRoute) {
    this.data = this.service.data[this.route_.snapshot.params['id']];
    this.imageUrl =
      'https://picsum.photos/1020/200?blog' + this.route_.snapshot.params['id'];
  }

  ngOnInit(): void {}
}