import { Injectable } from "../../node_modules/@angular/core";
import { HttpClient } from "../../node_modules/@angular/common/http";
import { Observable } from "../../node_modules/rxjs/Observable";
import { Endereco } from "../model/endereco";

@Injectable()
export class EnderecoService{
    constructor(private http: HttpClient) {}

    getEndereco(cep : String) : Observable<Endereco>{
        return this.http.get<Endereco>(
            `https://viacep.com.br/ws/${cep}/json)`);
            
    }
}