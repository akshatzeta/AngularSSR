import { Injectable } from '@angular/core';
import { Project } from '../models/Project';

import { Tag } from '../models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Project[] = [
    {id: 0, name: "Angular Portfolio", pictures: ["../../assets/ap1.png","../../assets/ap2.png","../../assets/ap3.png"], projectLink: "https://github.com/akshatzeta/Angular_Portfolio", summary: "Web Resume made with Angular", description: "Interactive web resume to display previous projects, work experience ", tags: [Tag.ANGULAR, Tag.TYPESCRIPT]},
    {id: 1, name: "Pocket-Monster-Game", pictures: ["../../assets/pocketmonter1.png","../../assets/pocketmonster2.png","../../assets/pocketmonster3.png"], projectLink: "https://github.com/akshatzeta/pocket-monster-game", summary: "RPG game with NPC and battle simulation", description: "Based on Pokemon Fire Red this game is made on Javascript and animation was made possible with GASP library character is movable to whole island.", tags: [Tag.JAVASCRIPT]},
    {id: 2, name: "Movie Diary", pictures: ["../../assets/MD1.png","../../assets/MD2.png","../../assets/MD3.png"], projectLink: "https://github.com/akshatzeta/MovieDiary", summary: "Fullstack web app developed using React and Spring Boot", description: "Was made to add personal reviews of any movie, series and anime watched by user in which they can add youtube trailer links and poster along with short review.", tags: [Tag.SPRING_BOOT,Tag.REACT,Tag.JAVA]},
    {id: 3, name: "Employee Managment System", pictures: ["../../assets/EMS.png"], projectLink: "https://github.com/akshatzeta/EmployeeManagmentSystem", summary: "Digital system to manage employee in directory.", description: "Made with help of using React for frontend and Spring Boot for backend, made a simple system which had function to Add, Delete and Update the information of employee", tags: [Tag.REACT,Tag.SPRING_BOOT, Tag.JAVA]}
  ];
  constructor() { }

  GetProjects() {
    return this.projects;

  }

  GetProjectById(id: number): Project {
    let project = this.projects.find(projects => projects.id ===id) 

    if(project === undefined){
      throw new TypeError('There is no project that matches the Id'+ id);
    }
    return project;
  }

  GetProjectsByFilter(filterTags: Tag[]){
    let filterdProjects: Project[] =[];
    
    this.projects.forEach(function(project){
      let foundAll = true;

      filterTags.forEach(function (filterTags){
        if (project.tags.includes(filterTags) == false){
          foundAll = false;
        }
      });

      if (foundAll){
        filterdProjects.push(project);
      }
    });

    return filterdProjects;
  }
}
