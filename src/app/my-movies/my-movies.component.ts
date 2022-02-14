import {Component, OnInit, Input, ViewContainerRef} from '@angular/core';
import { APIService } from '../API.service'
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'app-my-movies',
  templateUrl: './my-movies.component.html',
  styleUrls: ['./my-movies.component.scss']
})
export class MyMoviesComponent implements OnInit {
  @Input() data: any;


  constructor(
    private modalService: ModalService,
    private viewContainerRef: ViewContainerRef
  ) {}
  ngOnInit(): void {

  }
  openModal(e:any, modalTitle:any, modalText:any) {
    e.preventDefault();
    this.modalService.setRootViewContainerRef(this.viewContainerRef);
    this.modalService.addDynamicComponent(modalTitle, modalText);
  }

}
