import { Ingredintes } from "../shared/ingredintes.model";

export class Recipe{
  public name! : string;
  public description! : string;
  public imagePath! : string;
  public ingredintes! : Ingredintes[];

  constructor(name:string , description:string , imagePath:string , ingredients:Ingredintes[] ){
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingredintes= ingredients;
  }

}
