import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { People, Person } from 'src/app/models/people-interface';
import { SwServiceService } from 'src/app/services/sw-service.service';



@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  peopleList: Person[] = [];

  constructor(private modalService: NgbModal, private swServiceService: SwServiceService) { }

  ngOnInit(): void {
    this.swServiceService.getPersonajesLis().subscribe(res => {
      this.peopleList = res.results;
    });
  }



  /*onPersonClicked(modal: any) {
    this.modalService.open(modal,
      {
        keyboard: false,
        //size: 'sm',
        //backdrop: false,
        backdropClass: 'bg-warning',
        scrollable: true
      });
  }*/
  title = "";


  openModal(modal: any, person: Person) {
    this.title = 'Hola Mundo';
    this.modalService.open(modal, {
      fullscreen: true,
      keyboard: false
    }).componentInstance.person = person;
  }
}
