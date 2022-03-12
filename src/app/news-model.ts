import { NewsSubModel } from "./news-sub-model";

export interface NewsModel {

  // constructor( )
  newsType :string;
  data:Array<NewsSubModel>;

}
