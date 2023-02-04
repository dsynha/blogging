import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PostService } from './post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
	//closeResult: string;
  
	constructor(private modalService: NgbModal, private _postService : PostService) {}

  @Input('user')
  user: any;
  selectedPost: any;
  rawPost: any;

  ngOnInit(){
    this._postService.getUserPage(1).subscribe(res =>{
      this.user = res;
      this.selectedPost = this.user.posts[0];
      this._postService.getComments(this.selectedPost.id).subscribe(com => {

        this.rawPost = com;
      })
    })
  }

  openVerticallyCentered(longContent: any) {
		this.modalService.open(longContent, { centered: true, size: 'lg', scrollable: false });
	}

}
