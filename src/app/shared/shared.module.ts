import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { TagsPipe } from '../utils/tags.pipe';
import { PaginatorComponent } from './components/paginator/paginator.component';

const exports = [HeaderComponent, LogoComponent, TagsPipe, PaginatorComponent]

@NgModule({
  declarations: [ ... exports],
  imports: [CommonModule],
  exports: [ ... exports],
})
export class SharedModule {}
