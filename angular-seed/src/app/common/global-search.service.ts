import { Injectable } from '@angular/core';
import {Search} from "../models/search";

@Injectable()
export class GlobalSearchService {

    constructor(public search: Search) { }

    public setUserLogin(setsearch: string) {
        this.search.search=setsearch;
    }

}