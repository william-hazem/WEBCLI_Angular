# Projeto Angular

**Prerequisitos**
* Nodejs
* nvm
* npm (versão >= 8.5.0)
* AngularCLI

**Instalação**

```.bash
sudo apt-get nvm npm
nvm install 19.8.1
npm install -g npm@latest
npm install -g @angular/cli
```

Abra o terminal em um diretório desejado `cd <caminho-desejado>`, execute os comandos a seguir:
```.bash
npm init @angular HelloWorldApp
cd HelloWorldApp
```


## Servidor de desenvolvimento

Execute `ng serve` para iniciar um servidor de desenvolvimento. Navegue até http://localhost:4200/. A aplicação será recarregada automaticamente se você alterar algum dos arquivos de origem.

# Angular
Angular é um framework de desenvolvimento de aplicativos web em JavaScript/TypeScript mantido pelo Google. Ele permite a criação de aplicativos web complexos e escaláveis por meio de uma arquitetura robusta baseada em componentes, injeção de dependência, gerenciamento de estado e uma ampla gama de recursos, como rotas, animações e testes automatizados.

## Componentes
Componentes são os blocos de construção que compõem uma aplicação. Um componente inclui uma classe TypeScript com um decorador @Component(), um template HTML e estilos. O decorador @Component() especifica as seguintes informações específicas do Angular:
* Um seletor CSS que define como o componente é usado em um template. Os elementos HTML no seu template que correspondem a este seletor se tornam instâncias do componente.

* Um template HTML que instrui o Angular como renderizar o componente.

* Um conjunto opcional de estilos CSS que definem a aparência dos elementos HTML do template.

Exemplo mínimo de componente:
```.ts
import { Component } from '@angular/core';

@Component({
  selector: 'hello-world',
  template: `
    <h2>Hello World</h2>
    <p>This is my first component!</p>
  `
})
export class HelloWorldComponent {
  // The code in this class drives the component's behavior.
}
```

para renderizar o template, basta chamar o componente como tag html.
```.html
<hello-world></hello-world>
```

## Templates

Cada componente possui um template HTML que declara como o componente é renderizado. Você define esse template inline ou por caminho de arquivo.

O Angular adiciona elementos de sintaxe que estendem o HTML para que você possa inserir valores dinâmicos do seu componente. O Angular atualiza automaticamente o DOM renderizado quando o estado do seu componente muda. Uma aplicação desta característica é a inserção de texto dinâmico, como mostrado no exemplo a seguir.

```.html
    <p> '{{message}}' têm {{message.length}} caracteres</p>
```

O valor de `message` vêm da classe componente:

```.ts
import { Component } from '@angular/core';

@Component ({
  selector: 'hello-world-interpolation',
  templateUrl: './hello-world-interpolation.component.html'
})
export class HelloWorldInterpolationComponent {
    message = 'William';
}
```

Quando a aplicação carregar o componente e esse template, o usuário verá o seguinte:

```.html
'William' têm 7 caracteres
```
Observe o uso das chaves duplas - elas instruem o Angular a interpolar o conteúdo dentro delas.

O Angular também suporta ligações de propriedade para ajudá-lo a definir valores para as propriedades e atributos dos elementos HTML e passar valores para a lógica de apresentação da sua aplicação.

```.html
<p
  [id]="textId"
  [style.color]="fontColor">
  texto da cor verde
</p>
```
Observe o uso de colchetes - essa sintaxe indica que você está vinculando a propriedade ou atributo a um valor na classe do componente.

Declare ouvintes de eventos para escutar e responder às ações do usuário, como pressionamentos de tecla, movimentos de mouse, cliques e toques. Você declara um ouvinte de evento especificando o nome do evento entre parênteses:

```.html
...
<button
  type="button"
  [disabled]="canClick"
  (click)="sayMessage()">
  Messagem de Alerta
</button>
```

O exemplo anterior chama o método sayMessage, que é definido na classe do componente:

```.ts
import { Component } from '@angular/core';

@Component({
  selector: 'hello-world-binding',
  templateUrl: './hello-world-binding.component.html',
  styleUrls: ['./hello-world-binding.component.css']
})
export class HelloWorldBindingComponent {
  textId = 'textoVerde';
  fontColor = 'green';

  canClick = true;
  message = 'Messagem do alerta';
  
  sayMessage() {
    alert(this.message);
  }
}
```

## Injeção de dependências

A injeção de dependência permite declarar as dependências de suas classes TypeScript sem cuidar de sua instanciação. Em vez disso, o Angular lida com a instanciação para você. Esse padrão de design permite que você escreva um código mais testável e flexível.

Para ilustrar como a injeção de dependência funciona, considere o exemplo a seguir. O primeiro arquivo, logger.`service.ts`, define uma classe `Logger`. Essa classe contém uma função `writeCount` que registra um número no console.

```.ts
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class Logger {
  writeCount(count: number) {
    console.warn(count);
  }
}
```

use o comando `ng generate service Logger` e `ng generate component hello-world-di` para gerar os arquivos padrões implementar este exemplo.

Em seguida, o `arquivo hello-world-di.component.ts` define um componente Angular. Este componente contém um botão que utiliza a função `writeCount` da classe `Logger`. Para acessar essa função, o serviço Logger é injetado na classe `HelloWorldDI` adicionando logger private: Logger ao construtor.

```.ts
import { Component } from '@angular/core';
import { Logger } from '../logger.service';


@Component({
  selector: 'app-hello-world-di',
  templateUrl: './hello-world-di.component.html',
  styleUrls: ['./hello-world-di.component.css']
})
export class HelloWorldDiComponent {
  count = 0;

  constructor(private logger: Logger){}

  onLogMe() {
    this.logger.writeCount(this.count);
    this.count++;
  }
}
```


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

