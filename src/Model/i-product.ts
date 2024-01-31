export interface IProduct {
  ID: number ;
  Name: string;
  Price: number;
  RemainingQuantity: number;
  ImgUrl?: string;
  CategoryID:number;
  totalPriceOfSelectedQuatities? : number;
  selectedQuantitiesToBuy? :number;
}
