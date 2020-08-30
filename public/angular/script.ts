// @ts-ignore
const ng = ng;
const { Component, NgModule } = ng.core;
const { BrowserModule } = ng.platformBrowser;
const { platformBrowserDynamic } = ng.platformBrowserDynamic;

@Component({
  selector: "counter",
  template: `<button (click)="value = value + 1">Current value: {{ value }}</button>`,
})
class Counter {
  value: number = 0;
}

@Component({
  selector: "app",
  template: `
    <section>
      <h2>IncrementApp&trade; in Angular:</h2>
      <counter></counter>
    </section>
  `,
})
class App {}

@NgModule({
  imports: [BrowserModule],
  declarations: [App, Counter],
  bootstrap: [App],
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
