
let counter = 1;

export class Device {
  id: number;
  name: string;
  tags: string[];
  description: string;

  constructor(obj: Exclude<Device, 'id'>) {
    this.id = counter;
    this.name = obj.name;
    this.tags = obj.tags;
    this.description = obj.description;

    counter++;
  }
}
