export interface ResponseDTO {
  message : string[];
  result : any;
  isSuccess : boolean;
  itemInPage? : number;
  pageNumber? : number;

}
