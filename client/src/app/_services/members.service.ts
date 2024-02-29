import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Member } from '../_models/member';
import { map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
baseUrl = environment.apiUrl;
members: Member[] = [];

  constructor(private http: HttpClient) { 
    //this.getMember('juan');
  }
  getMembers(){
    if(this.members.length > 0) return of(this.members);
    return this.http.get<Member[]>(this.baseUrl + 'users').pipe(
      map((members: Member[]) => {
        this.members = members;
        return members;
      })
    )
  }

  getMember(username: string){
    const member = this.members.find(x => x.userName == username)
    if(member)return of(member);
    const url = this.baseUrl + 'users/' + username;
    //console.log("Fetching member data from:", url); // Log the URL being requested
    return this.http.get<Member>(url);
  }
  

  updateMemeber(member: Member)
  {
    return this.http.put(this.baseUrl + 'users',member).pipe(
      map(() => {
        const index =this.members.indexOf(member);
        this.members[index]= {...this.members[index], ...member}
      })
    )
  }
  
/*
  getHttpOptions(){
    const userString = localStorage.getItem('user');
    if(!userString) return;
    const user = JSON.parse(userString);
    return{
      headers: new HttpHeaders({
        Authorization: 'Bearer' + user.token
      })
    }
  }*/
}
