import { Component, OnInit } from "@angular/core";
import { Event, NavigationEnd, Router } from "@angular/router";
import { filter, flatMap, map } from "rxjs/operators";
import { EventBusService } from "src/app/shared/eventbus/event-bus.service";
import { SidebarActions } from "src/app/shared/sidebar/sidebar-actions";
import { MenuFacade } from "src/app/store/facades/menu.facade";
import { environment } from "src/environments/environment";
import { DemoItem } from "../demo-item.model";
import { DemoFacade } from "../store/facades/demo.facade";

@Component({
  selector: "app-demo-container",
  templateUrl: "./demo-container.component.html",
  styleUrls: ["./demo-container.component.scss"]
})
export class DemoContainerComponent implements OnInit {
  constructor(
    public menuFacade: MenuFacade,
    private router: Router,
    private df: DemoFacade,
    private eb: EventBusService
  ) {}

  title: string = environment.title;
  header: string = "Please select a demo";

  demos$ = this.df.getDemos();
  current: DemoItem = this.demos$ != null ? this.demos$[0] : null;
  workbench: any;

  showEditor: boolean = false;

  ngOnInit() {
    this.setMenu();
    this.setMetadata();
    this.getWorbenchStyle();
    this.setEditor();
  }

  setMenu() {
    this.df.initData();
  }

  setEditor() {
    this.eb.Commands.subscribe(action => {
      this.showEditor = action == SidebarActions.HIDE_MARKDOWN ? false : true;
    });
  }

  getWorbenchStyle() {
    let result = {};
    this.menuFacade.sideNavVisible.subscribe(visible => {
      result = visible
        ? {
            "margin-left": "10px"
          }
        : {};
    });
    return result;
  }

  private setMetadata() {
    this.router.events
      .pipe(
        filter((evt: Event) => evt instanceof NavigationEnd),
        flatMap((evt: NavigationEnd) => {
          let childroute = evt.url.substr(evt.url.lastIndexOf("/") + 1);
          return this.demos$.pipe(
            map(items => items.find(i => i.url.includes(childroute)))
          );
        })
      )
      .subscribe(demo => {
        this.header =
          demo != null
            ? `Demo: ${demo.title} - Component: ${demo.component}`
            : "Please select a demo";
      });
  }
}
