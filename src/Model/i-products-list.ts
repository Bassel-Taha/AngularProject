export interface IProductsList {
  ID: number ;
  Name: string;
  Price: number;
  Quantity: number;
  ImgUrl?: string;
  CategoryID:number;
  totalPriceOfSelectedQuatities? : number;
  selectedQuantitiesOfProduct? :number;
}
