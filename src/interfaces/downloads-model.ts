import { DownloadsSubModel } from "./downloads-sub-model";


export interface DownloadsModel {

  newsType :string;
  data:Array<DownloadsSubModel>;
}

