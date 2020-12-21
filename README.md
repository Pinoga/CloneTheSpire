# CloneTheSpire
### My attempt to clone the logic from the mechanics of the game Slay the Spire
#### Motivation
- The logic seems clear enough for me to try and reverse-engineer all of it. There is something beautiful about its simplicity. If I can visualize it, why can't I reproduce it? Seemed like a good oportunity for me to put my OOP skills at test

### What I have so far
While playing the game, I noticed there are a bunch of event listeners in it. For example:
- When a relic effect starts, its related icon shines at the top of the screen. I think a good implementation of that would (very roughly) be:
```typescript
class EffectObserver extends Observer {
  public onNotify(event: Event, entity: EffectEntity): void {
    switch(event) {
      case 'EVENT_RELIC_EFFECT':
        UIEffectsHandler.shineIcon(entity);
        break;
      // more code...
    }
  }
}
class Effect {
  private observers;
  
  public notifyAllObservers(event: Event, ...args: any): void {
    for (let observer of this.observers) {
      observer.onNotify(event, ...args);
    }
  }
}
// during the event trigger logic
  effect.notifyAllObservers('EVENT_RELIC_EFFECT', relic.id);
//
```
- There are many other cases that can be thought of as Observer/Subject situation

### More to come...
