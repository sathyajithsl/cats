import { Component, OnInit } from '@angular/core';
import { CatpicsService } from '../../services/catpics.service'

@Component({
  selector: 'app-infocard',
  templateUrl: './infocard.component.html',
  styleUrls: ['./infocard.component.css']
})
export class InfocardComponent implements OnInit {

  public catInfo:any;
  public currentInfo:any;
  public loading:boolean;
  constructor(private catApiService:CatpicsService) { }

  ngOnInit(): void {
    this.catInfo={};
    this.getCatInfo();
  }
  getCatInfo(){
    this.loading=true;
    this.catApiService.getCatFacts().subscribe(data =>{
      this.catInfo=data;      
      this.loading=false;
      this.changeInfo();
    },(error)=>{
      console.error(error);
    });
  }
  changeInfo(){
    var min=0;
    var max=this.catInfo.all.length;
    var id=Math.floor(Math.random() * (max - min)) + min;
    this.currentInfo=this.catInfo.all[id].text;
    console.log(this.currentInfo);
  }
}
