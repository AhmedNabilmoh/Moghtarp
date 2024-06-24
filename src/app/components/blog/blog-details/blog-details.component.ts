import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {

  constructor() { }
  backgrounds="../../../../assets/img/hero/h2_hero1.png";
  //single blog img1
  singleBlog="../../../../assets/img/blog/single_blog_1.png";
// left  prev post
prevpost="../../../../assets/img/post/preview.png";
lastpost="../../../../assets/img/post/next.png";

// harvard milan
harvardimg="../../../../assets/img/blog/author.png";

// comment img
commentimg1="../../../../assets/img/blog/comment_1.png";
commentimg2="../../../../assets/img/blog/comment_2.png";
commentimg3="../../../../assets/img/blog/comment_3.png";






   
  //rigth div2 img
  R_div2img1="../../../../assets/img/post/post_1.png";
  R_div2img2="../../../../assets/img/post/post_2.png";
  R_div2img3="../../../../assets/img/post/post_3.png";
  R_div2img4="../../../../assets/img/post/post_4.png";

  // right div5 img
  R_img5="../../../../assets/img/post/post_5.png";
  R_img6="../../../../assets/img/post/post_6.png";
  R_img7="../../../../assets/img/post/post_7.png";
  R_img8="../../../../assets/img/post/post_8.png";
  R_img9="../../../../assets/img/post/post_9.png";
  R_img10="../../../../assets/img/post/post_10.png";

  ngOnInit(): void {
  }

}
