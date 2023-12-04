import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente('Rafael', 111222333);
const cliente2 = new Cliente('Beatriz', 444555666);


const contaCorrenteRafael = new ContaCorrente(1001, cliente1);
const conta2 = new ContaCorrente(1002,cliente2);



contaCorrenteRafael.depositar(1000)
contaCorrenteRafael.transferir(350, conta2);




