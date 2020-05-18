import { Component, OnInit } from '@angular/core';
import { GitHttpService } from "../git-httpservice.service";
import { User } from '../user';
import { Repos } from '../repo'


@Component({
  selector: 'app-gitsearch',
  templateUrl: './gitsearch.component.html',
  styleUrls: ['./gitsearch.component.css']
})
export class GitsearchComponent implements OnInit {
  repos: any;
  user: User;
  profile: any;
  username: string;

  constructor(private gitHttpService: GitHttpService) {
    this.username = "shizukane";
    this.gitHttpService.getgitsearchInfo().then(profile => {
      console.log(profile);
      this.profile = profile;
    });

      this.gitHttpService.getgitsearchRepo().then(reply => {
        this.repos = reply;
      });

    }
  

 
  findProfile(){
      this.gitHttpService.updateProfile(this.username);
      this.gitHttpService.getgitsearchInfo().then(profile => {
        console.log(profile);
        this.profile = profile;
      });

      this.gitHttpService.getgitsearchRepo().then(reply => {
        console.log(reply);
        this.repos = reply;
      })
    }
  ngOnInit() {
      this.gitHttpService.updateProfile(this.username);
      this.gitHttpService.getgitsearchInfo();
      this.user = this.gitHttpService.user;

      
      console.log(this.user)
      this.gitHttpService.getgitsearchRepo().then(repos =>
         this.repos = repos
         );
    }
}

