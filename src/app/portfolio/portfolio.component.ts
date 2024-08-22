import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../models/Project';
import { ProjectsService } from '../services/projects.service';
import { Tag } from '../models/Tag';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  projects = {} as Project[];

  isCollapsed: boolean = true;
  typescript: boolean = false;
  angular: boolean = false;
  react: boolean = false;
  spring_boot: boolean = false;
  javascript: boolean = false;
  java: boolean = false
  filtering: boolean = false;
  constructor(private titleService:Title, private projectService: ProjectsService){
    this.titleService.setTitle('Akshat Choudhary - Portfolio')
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

  Filter(){
    let filterTags: Tag[] = [];

      if(this.typescript){
        filterTags.push(Tag.TYPESCRIPT);
      }
      if(this.angular){
        filterTags.push(Tag.ANGULAR);
      }
      if(this.react){
        filterTags.push(Tag.REACT);
      }
      if(this.spring_boot){
        filterTags.push(Tag.SPRING_BOOT);
      }
      if(this.javascript){
        filterTags.push(Tag.JAVASCRIPT);
      }
      if(this.java){
        filterTags.push(Tag.JAVA);
      }

      if(this.angular || this.react || this.java || this.javascript || this.typescript || this.spring_boot){
        this.filtering = true;
      }
      else{
        this.filtering = false;
      }
    
    this.projects = this.projectService.GetProjectsByFilter(filterTags);
  }

  ResetFilters(){
    this.angular = false;
    this.react = false;
    this.java = false;
    this.javascript = false;
    this.typescript = false;
    this.spring_boot = false;
    this.filtering = false;

    this.projects = this.projectService.GetProjects();
  }
}
