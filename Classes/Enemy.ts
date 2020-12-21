import Effect from './Effect'
export default class Enemy {
    public hp: number;
    public effects: Effect[];
    constructor(hp: number) {
        this.hp = hp
        this.effects = []
    }
}