import { NewsTypeData } from "./news-type-data";

export interface NewsSubModel {

  type : string;
  data : Array<NewsTypeData>;
  _id : string;
 
  // constructor(public title: string, public image: string, public desc:string)
  // {
  //   this.title = title;
  //   this.image = image;
  //   this.desc=desc;
  // }


}
