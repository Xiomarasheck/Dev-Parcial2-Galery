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
  viewMessage:boolean = false;
  itemsApi:number = 100;
  pageApi:number = 2;

  
  /* Filter data */
  filterItem = '';
  
  /*Num pages */
  numPages = 3;

  constructor(private service : ImagesService){}

  ngOnInit(): void {
    this.getData(this.itemsApi,this.pageApi);
  }

  getData(numImages:number,page:number){
    this.service.getJson("https://picsum.photos/v2/list?page=" + page + "&limit=" + numImages).subscribe((res : any) => {
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

  pages(pages:number) {
    if (pages > 0){
      this.numItems = pages;
    }else{
      this.numItems = 8;
    }
  }

  numImages(pages:number) {
    if (pages > 0){
      this.getData(pages,this.pageApi);
    }else{
      this.getData(this.itemsApi,this.pageApi);
    }
  }

  currentPage(page:number) {
    if (page > 0){
      this.getData(this.itemsApi,page);
      if (this.items.length = 0){
        this.viewMessage = true;
      }
    }else{
      this.getData(this.itemsApi,this.pageApi);
      if (this.items.length = 0){
        this.viewMessage = true;
      }
    }
  }

  isEmpty(items){
    if(items.length = 0){
      return false;
    }
    return true;

  }

}
