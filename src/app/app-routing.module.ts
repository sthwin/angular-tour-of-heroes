import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { IframeComponent } from './iframe/iframe.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'iframe', component: IframeComponent },
];

/**
 * @NgModule에 메타데이터를 지정하면 모듈이 생성될 때 라우터를 초기화하면서 브라우저의 주소가 변화되는 것을 감지합니다.
 * 그래서 AppRoutingModule에도 라우터를 초기화하기 위해 imports 배열에 RouterModule을 등록해야 하는데,
 * 이 때 RouterModule.forRoot() 메소드에 routes 인자를 넣어서 실행한 결과를 지정합니다.
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
