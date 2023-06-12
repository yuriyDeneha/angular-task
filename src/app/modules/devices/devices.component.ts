import { Component, OnInit } from '@angular/core';
import { DevicesService } from 'src/app/shared/services/devices.service';
import { Device } from 'src/app/utils/device';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss'],
})
export class DevicesComponent implements OnInit {

  page = 0;
  size = 10;
  devices: Device[] = [];
  quantity: number = 0;

  constructor(private deviceService: DevicesService) {}

  ngOnInit(): void {
    this.getAll();
  }

  // Initialize the devices array with pagination and calculate the total number of pages
  private getAll() {
    this.deviceService.getAll(this.page, this.size).subscribe(({items, quantity}) => {
      this.devices = items;
      this.quantity = quantity;
    })
  }

  /**
   * Sets the current page for pagination.
   * @param {number} page - The page number to set.
   */
  public setPage(page: number) {
    this.page = page;
    this.getAll();
  }

  /**
   * Scrolls to the previous or next page based on the specified number.
   * @param {number} num - The number to scroll the page by (-1 for previous, 1 for next).
   */
  public scrollPage(num: number) {
    this.page += num;
    // Ensure the page is within valid bounds
    if (this.page < 1) {
      this.page = 1;
    }

    this.getAll();
  }

  /**
   * Handles the event when the number of elements per page changes.
   * @param {any} event - The event object.
   */
  public setSize(event: any) {
    this.size = +event.target.value;
    this.page = 0;

    this.getAll();
  }
}
