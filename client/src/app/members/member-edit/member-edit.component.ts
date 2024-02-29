import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { Member } from 'src/app/_models/member';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services/account.service';
import { MembersService } from 'src/app/_services/members.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm | undefined;
  @HostListener('window:beforeunload', ['$event']) unloadNotification($event:any){
    if(this.editForm?.dirty){
      $event.returnValue=true;
    }
  }
  member: Member | undefined;
  user: User | null = null;

  constructor(private accountService: AccountService, private memberService: MembersService, 
    private toastr: ToastrService) {
    this.accountService.currentUser$.pipe(take(1)).subscribe({
      next: user => this.user = user
    })
  }

  ngOnInit(): void {
    this.loadMember();
  }

  loadMember() {
    if (!this.user) {
      console.log("THIS HAS A PROBLEM: User or username is not available");
      return;
    }
  
    this.memberService.getMember(this.user.username).subscribe({
      next: member => {
        this.member = member;
        console.log("MEMBER DATA:", member); // Log the member object to see its contents
        console.log("THE USER IS:", member?.userName);
      },
      error: err => {
        console.error("Error occurred while fetching member:", err);
      }
    });
  }
  
  updateMember(){
    //console.log(this.member);
    this.memberService.updateMemeber(this.editForm?.value).subscribe({
      next: _=> {
        this.toastr.success('Profile updated successfully');
        this.editForm?.reset(this.member);
      }
        
      }
    )

  }

}
