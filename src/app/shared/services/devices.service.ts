import { Injectable } from '@angular/core';
import { Device } from 'src/app/models/device';
import data from '../../../assets/dummy-data/devices.json';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
/**
 * Represents a state service for managing devices.
 */
export class DevicesService {

  devices: Device[] = [];

  constructor() {
    // Initialize the devices array by creating Device objects from the data array
    data.forEach((el: any) => {
      this.devices.push(new Device(el));
    });
  }

  /**
   * Adds a new device to the devices array.
   * @param {device} el - The device object to add.
   */
  add(el: Device) {
    this.devices.push(new Device(el));
  }

  /**
   * Deletes a device from the devices array based on its ID.
   * @param {number} id - The ID of the device to delete.
   */
  delete(id: number) {
    this.devices = this.devices.filter((el) => {
      el.id != id;
    });
  }

  /**
   * Updates an existing device in the devices array.
   * @param {Device} device - The updated device object.
   */
  update(device: Device) {
    let deviceToUpdate = this.devices.find((el) => el.id == device.id);
    if (deviceToUpdate) {
      let index = this.devices.indexOf(deviceToUpdate);
      this.devices[index] = device;
    }
  }

  /**
   * Retrieves a device from the devices array based on its ID.
   * @param {number} id - The ID of the device to retrieve.
   * @returns {Device | undefined} - The device object if found, undefined otherwise.
   */
  get(id: number) {
    return this.devices.find((el) => el.id == id);
  }

  /**
   * Retrieves a subset of devices from the devices array with pagination.
   * @param {number} page - The page number.
   * @param {number} amount - The number of devices per page.
   * @returns {Device[]} - The array of devices for the specified page.
   */
  getAll(page: number = 0, ammount: number = 10): Observable<{
    items: Device[],
    quantity: number
  }> {
    return of({
      items: this.devices.slice(page * ammount, (page + 1) * ammount),
      quantity: this.devices.length
    })
  }

  /**
   * Retrieves the name of a device based on its ID.
   * @param {number} id - The ID of the device.
   * @returns {string} - The name of the device or the ID if not found.
   */
  getDeviceNameById(id: number) {
    return this.devices.find((el) => el.id == id)?.name || `${id}`;
  }
}
