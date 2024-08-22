import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../services/projects.service';
import { Project } from '../models/Project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  featuredProject = {} as Project;
project: any;

  constructor(private titleService:Title, private projectService: ProjectsService){
    this.titleService.setTitle('Akshat Choudhary - Home')
  }
  ngOnInit(): void {
    this.featuredProject = this.projectService.GetProjectById(0);
  }
}
