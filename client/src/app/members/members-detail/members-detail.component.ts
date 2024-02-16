import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleryItem, GalleryModule, ImageItem } from 'ng-gallery';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { Member } from 'src/app/_models/member';import { MembersService } from 'src/app/_services/members.service';


@Component({
  selector: 'app-members-detail',
  standalone: true,
  templateUrl: './members-detail.component.html',
  styleUrls: ['./members-detail.component.css'],
  imports: [CommonModule, TabsModule, GalleryModule], // this goes hand in hand with stanalone: true to solve the problems of members-detail.component.html
})
export class MembersDetailComponent implements OnInit {
  member: Member | undefined;
  images: GalleryItem[] = [];

constructor(private memberService: MembersService, private route: ActivatedRoute){}

ngOnInit(): void {
 this.loadMember();
}
loadMember(){
  var username = this.route.snapshot.paramMap.get('username')
  if (!username) return;
  this.memberService.getMember(username).subscribe({
    next: member => {
      this.member = member,
      this.getImages();
    }
  })
}

getImages(){
  if (!this.member) return;
  for (const photo of this.member?.photos)
  {
this.images.push(new ImageItem({src: photo.url, thumb: photo.url}));

  }
}

}
