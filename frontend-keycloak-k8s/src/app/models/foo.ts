export class Foo {
  id?: number;
  name?: string;

  /*
  constructor(id?: number, name?: string) {
    this.id = id;
    this.name = name;
  }
  */
  constructor(name?: string) {
    this.name = name;
  }
}
