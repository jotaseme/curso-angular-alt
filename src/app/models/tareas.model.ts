export interface TareasInterface {
  name: string;
  isCompleted: boolean;
}

export class TareasModel implements TareasInterface {

  constructor(
    public name: string = '',
    public isCompleted: boolean = false) {}
}
