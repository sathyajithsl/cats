import { Component, OnInit } from '@angular/core';
import { CatpicsService } from '../../services/catpics.service'
@Component({
  selector: 'app-catcard',
  templateUrl: './catcard.component.html',
  styleUrls: ['./catcard.component.css'],
})
export class CatcardComponent implements OnInit {
  public catData:any;
  public loading:boolean;
  //public imageToShow:any;
  constructor(private catApiService:CatpicsService) { }

  ngOnInit(): void {
    this.catData={};
    this.getCats();
  }
  /*createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
       this.imageToShow = reader.result;
    }, false);
 
    if (image) {
       reader.readAsDataURL(image);
    }
 }*/
  getCats(){
    this.loading=true;
    this.catApiService.getCats().subscribe(data =>{
      this.catData=data[0];
      this.catData.url=data[0].url;
      console.log(this.catData);
      this.loading=false;
    },(error)=>{
      console.error(error);
    });
    //this.loading=false;
  }
  /*getCats(){
    this.loading=true;
    this.catApiService.getCats().subscribe(data =>{
      this.createImageFromBlob(data);
      this.loading=false;
    },error =>{
      this.loading=false;
      console.log(error);
    });
  }*/
}
