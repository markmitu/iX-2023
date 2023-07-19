
export class Pokemon {

    constructor(id_in, name_in, natures_in){
        this.id = id_in;
        this.name = name_in;
        this.natures = natures_in;
    }

    static fromJSON(json) {
        return new Pokemon(json.id, json.name, json.natures);
    }


}