import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Post {
  id?: string,
  title: string,
  createdAt: Date,
  text: string,
  author: string
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts: Post[] = []
  page: number = 1
  constructor(private http: HttpClient) { }
  getPosts() {
    this.http.get<Post[]>('/post', {
      params: {
        'page': this.page.toString(),
        'limit': '10',
        'sort': ''
      }
    })
    .subscribe(data => {
      this.posts = data
    })
  }

  getPost(id) {
    return this.http.get<Post>('/post/' + id)
  }
}
