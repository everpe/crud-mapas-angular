import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }

  addPost(post: Post): any {
    return this.http.post(
      `${environment.urlBack}/posts/`,
      post
    );
  }
  deletePost(idHora: number): Observable<any> {
    return this.http.delete(
      `${environment.urlBack}/posts/${idHora}`
    );
  }
  updatePost(post: Post) {
    return this.http.put<Post>(
      `${environment.urlBack}/posts/${post.id}`,
      post
    );
  }
  patchPost(post: Post) {
    return this.http.put<Post>(
      `${environment.urlBack}/posts/${post.id}`,
      post
    );
  }
  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(
      `${environment.urlBack}/posts`
    );
  }

}
