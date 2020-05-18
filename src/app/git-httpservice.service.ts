import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Repos } from './repo';

@Injectable()

export class GitHttpService {
  repos: Repos;
  user: User;
  repo;


  username: string;
  client_id = '4ab04b8d16fb7f3f4b4e94e00113090419fcb3be';
  client_secret = '4ab04b8d16fb7f3f4b4e94e00113090419fcb3be';

  constructor(private http: HttpClient) {
    console.log();
    this.user = new User("", "", "", "", "", 0, 0, 0, 0);
    this.repos = new Repos('', '', '', new Date(), new Date(), '');
    this.username = 'shizucane'
  }


  getgitsearchInfo() {
    interface ApiResponse {
      name: string;
      login: string;
      avatar_url: string;
      public_repos: number;
      followers: number;
      following: number;
      html_url: string;
      repos_url: string;
      created_at: Date;
      forks: number;

    }
    let promise = new Promise((resolve, reject) => {
      return this.http.get<ApiResponse>("https://api.github.com/users/" + this.username + "?client_id=" + this.client_id + "&client_secret=" + this.client_secret).toPromise().then(response => {
        this.user.name = response.name;
        this.user.login = response.login;
        this.user.avatar_url = response.avatar_url;
        this.user.public_repos = response.public_repos;
        this.user.followers = response.followers;
        this.user.following = response.following;
        this.user.html_url = response.html_url;
        resolve();
      },
        err => {
          this.user.name = "Blank";
          this.user.login = "Blank";
          this.user.avatar_url = "Blank";
          this.user.followers = 0;
          this.user.following = 0;
          this.user.public_repos = 0;
          this.user.html_url = "Blank";

          reject(err)
        })
    })

    return promise;
  }


  getgitsearchRepo() {
    interface ApiResponse {
      name: string;
      description: string;
      html_url: string;
      created_at: Date;
      updated_at: Date;
      homepage: string;

    }
    const promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.client_id + "&client_secret=" + this.client_secret).toPromise().then(response => {
        this.repo = response;
        console.log(this.repo)
        resolve(this.repo)
      },
      err=>{
        reject(err)

      })
    })

    return promise;
  }

  updateProfile(name:string){
    this.username = name;

  }
}

//   private username:string;
//   private client_id = '4ab04b8d16fb7f3f4b4e94e00113090419fcb3be'
//   private client_secret = '4ab04b8d16fb7f3f4b4e94e00113090419fcb3be'

//   constructor(private http:HttpClient){
//     console.log("service is always ready!");
//     this.username = 'shizukane';
//   }

//   getgitsearchInfo(){
//   return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.client_id + "&client_secret=" + this.client_secret).map(result=>result);

//   }
//   getgitsearchRepos() {
//     return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.client_id + "&client_secret=" + this.client_secret).map(result=>result)
//   }
//   updateProfile(username: string) {
//     this.username = username;
//   }
// }

