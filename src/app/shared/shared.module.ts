import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationModule } from './modules/navigation/navigation.module';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { TagsPipe } from '../utils/tags.pipe';
import { PaginatorComponent } from './components/paginator/paginator.component';

@NgModule({
  declarations: [HeaderComponent, LogoComponent, TagsPipe, PaginatorComponent],
  imports: [CommonModule, NavigationModule],
  exports: [NavigationModule, HeaderComponent, LogoComponent, TagsPipe],
})
export class SharedModule {}
