import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {
    loveIt = 0;
  appareilStatus = 'nothing'; 
  loveIt = 0;
  dontLoveIt:Number = 0;

@Input() postTitle: string;
@Input() postContent: string;
@Input() postDate: string;


  constructor() { }

  ngOnInit() {
  }
getStatus() {
    document.getElementById("Title").innerHTML = "Hello World";
}




getColor() {
    
    if(this.loveIt > this.dontLoveIt) {

      return 'green';
        this.appareilStatus === 'allumé';

    } else if(this.loveIt < this.dontLoveIt) {

      return 'red';

    }
    }
       
   onAllumer() {
    
    this.loveIt = this.loveIt + 1;
}
onEteint() {
    
    this.dontLoveIt = this.dontLoveIt + 1;
}


} 