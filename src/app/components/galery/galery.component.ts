import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../services/images.service'


@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css']
})
export class GaleryComponent implements OnInit {
  
  items = [];
  urlModal = "";
  pageOfItems: Array<any>;
  showModal: boolean;
  numItems:number = 8;
  pageActual:number = 1; 
  
  /* Filter data */
  filterItem = '';
  
  /*Num pages */
  numPages = 3;

  constructor(private service : ImagesService){}

  ngOnInit(): void {
    this.service.getJson("https://picsum.photos/v2/list").subscribe((res : any) => {
      console.log(res);
      this.items = res;  
    });
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

  show(url:string){
    this.urlModal = url;
    this.showModal = true; // Show-Hide Modal Check
  }

  //Bootstrap Modal Close event
  hide(){
    this.showModal = false;
  }

  Pages(pages:number) {
    if (pages > 0){
      this.numItems = pages;
    }else{
      this.numItems = 8;
    }
  }

}
