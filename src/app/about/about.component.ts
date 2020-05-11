import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @ViewChild('modal', { static: false }) modal: ElementRef;
  @ViewChild('modalImg', { static: false }) modalImg: ElementRef;
  @ViewChild('spanClose', { static: false }) spanClose: ElementRef;
  
  ngOnInit() {

  }

  public onClickImage(img) {
    this.modal.nativeElement.style.display = "block";
    this.modalImg.nativeElement.src = img.toElement.src;
    this.modalImg.nativeElement.style.width = "100%";
    this.modalImg.nativeElement.style.height = "70%";

  }
  public onCloseImg() {
    this.modal.nativeElement.style.display = "none";
  }

}