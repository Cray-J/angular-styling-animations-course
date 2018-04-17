import {Component, HostBinding, OnInit} from '@angular/core';

import { Project } from './project.model';

import { ProjectsService } from './projects.service';
import {itemStateTrigger, listStateTrigger, markedTrigger, slideStateTrigger} from './animations';
import {routeFadeStateTrigger, routeSlideStateTrigger} from '../shared/route-animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    markedTrigger,
    itemStateTrigger,
    slideStateTrigger,
    routeFadeStateTrigger,
    routeSlideStateTrigger,
    listStateTrigger
  ]
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  markedPrjIndex = 0;
  progress = 'progressing';
  createNew = false;
  // @HostBinding('@routeFadeState') routeAnimation = true;
  @HostBinding('@routeSlideState') routeAnimation = true;

  constructor(private prjService: ProjectsService) { }

  ngOnInit() {
    this.prjService.loadProjects()
      .subscribe(
        (prj: Project[]) => {
          this.progress = 'finished';
          this.projects = prj;
        }
      );
  }

  onStatusUpdated(newStatus: string, id: number) {
    this.projects[id].status = newStatus;
  }

  onProjectDeleted(index: number) {
    this.projects.splice(index, 1);
  }

  onProjectCreated(project: Project) {
    this.createNew = false;
    setTimeout(() => {
      this.projects.unshift(project);
    }, 300);
  }
}
