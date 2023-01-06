import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent {
  @Input() img = ''
  @Output() loaded = new EventEmitter<string>()
  imgDefault = 'https://www.benditofutbol.com/files/article_main/uploads/2022/10/27/635b10bf43e19.jpeg'

  imgError() {
    this.img = this.imgDefault
  }

  imgLoaded(){
    this.loaded.emit(this.img);
  }
}
