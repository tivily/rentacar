import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

 

  apiUrl="https://localhost:44306/api/"

  constructor(private httpClient:HttpClient) { }

  getColors():Observable<ListResponseModel<Color>>{
    let newPath=this.apiUrl+"colors/getall";
   return this.httpClient
    .get<ListResponseModel<Color>>(newPath)
   }
   add(color:Color):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"colors/add",color)
  }
  getColorsById(colorId:number) : Observable<ListResponseModel<Color>>{
    let newPath="https://localhost:44306/api/colors/getbyid?colorid="+colorId
    return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }

  update(color:Color): Observable<ResponseModel>{
    let newUrl = "https://localhost:44306/api/colors/update"
    return this.httpClient.post<ResponseModel>(newUrl, color)
  }
}
