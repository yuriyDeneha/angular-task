import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevisesRoutingModule } from './devices-routing.module';
import { DevicesComponent } from './components/devices/devices.component';

import { DeviceComponent } from './components/device/device.component';
import { IndicatorComponent } from './indicator/indicator.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

import { TagInputModule } from 'ngx-chips';
import { IndexComponent } from './components/index/index.component';

@NgModule({
  declarations: [DevicesComponent, DeviceComponent, IndicatorComponent, IndexComponent],
  imports: [
    CommonModule,
    DevisesRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    TagInputModule,
  ],
})
export class DevicesModule {}
