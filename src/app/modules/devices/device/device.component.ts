import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StateService } from 'src/app/shared/servises/state.service';
import { Device } from 'src/app/utils/device';
@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss'],
})
export class DeviceComponent implements OnInit {
  device: Device | undefined;
  deviceForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private state: StateService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    // Get the 'id' parameter from the current route
    let id = this.route.snapshot.params['id'];

    // Retrieve the device object from the state service based on the ID
    this.device = this.state.get(id);
    this.createPageForm();
  }

  /**
   * Creates the form for device details.
   * Sets the initial values of the form fields based on the retrieved device object.
   */
  private createPageForm(): void {

    this.deviceForm = this.fb.group({
      id: [this.device?.id || ''],
      name: [this.device?.name || '', Validators.required],
      tags: [this.device?.tags || ['']],
      description: [this.device?.description || ''],
    });
  }

  /**
   * Submits the device form when it is valid.
   * Updates the device in the state service with the form values and navigates to the 'devices' route.
   */
  public submit(): void {
    if (!this.deviceForm.valid) {
      return;
    }
    this.state.update(this.deviceForm.value);
    this.router.navigate(['devices']);
  }

  /**
   * Cancels the device form and navigates to the 'devices' route.
   */
  public cancel() {
    this.router.navigate(['devices']);
  }
}
