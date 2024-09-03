import { MainPageComponent } from "./main-page/main-page.component";
import { Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { AboutComponent } from "./about/about.component";
import { LinkTableComponent } from "./link-table/link-table.component";
import { LinkInfoComponent } from "./link-info/link-info.component";


export const routes: Routes = [
    { path: 'home', component: MainPageComponent },
    { path: 'login', component: AuthComponent },
    { path: 'about', component: AboutComponent },
    { path: 'links', component: LinkTableComponent },
    { path: 'info', component: LinkInfoComponent},
    { path: 'info/:link', component: LinkInfoComponent},
  ];