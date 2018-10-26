import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Endereco} from "../model/endereco";
import { Processo } from "../model/processo";

@Injectable()
export class ProcessoService {
        constructor(private http : HttpClient) { }

        getProcesso() : Observable<Processo[]>{
            return this.http.get<Processo[]>(
                'https://dadosabertosapi.ufca.edu.br/service/recurso/processos.json'
            );
            
    }
}