import Observer from './Observer'
export default class Subject {
    public observers: Observer[];
    constructor() {
        this.observers = []    
    }
    public addObserver(observer: Observer) : void {
        this.observers.push(observer)
    }
    public notify() {
        this.observers.forEach(observer => observer.onNotify(this))
    }
}