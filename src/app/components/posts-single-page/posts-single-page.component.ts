import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/shared/services/posts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts-single-page',
  templateUrl: './posts-single-page.component.html',
  styleUrls: ['./posts-single-page.component.css']
})
export class PostsSinglePageComponent implements OnInit {
  post: any = null
  constructor(public postsService: PostsService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.post = this.postsService.getPost(params.id)
    })
  }

}
