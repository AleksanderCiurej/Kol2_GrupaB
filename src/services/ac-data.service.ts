import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ACDataService {

  private url = 'https://kol2tai.herokuapp.com/api/forum';

  constructor(private http: HttpClient) { }

  getAllPosts(){
    return this.http.get(this.url + '/posts');
  }

  getPostById(id){
    return this.http.get(this.url + '/posts/' + id);
  }
}
