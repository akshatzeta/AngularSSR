import { Component } from '@angular/core';
import { BsComponentRef } from 'ngx-bootstrap/component-loader';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Project } from '../models/Project';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.css']
})
export class ProjectModalComponent {

  project = {} as Project;

  constructor(public bsModalRef: BsModalRef) {

  }
}
