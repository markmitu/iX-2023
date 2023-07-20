
export class Recipe {
    constructor(name_in, ingr_in, instr_in, id_in = null) {
        this.id = id_in;
        this.name = name_in;
        this.ingredients = ingr_in;
        this.instructions = instr_in;
    }
}