const {
  soma, subtracao, multiplicacao, divisao, potencia, raizQuadrada, restoDivisao,
  fatorial, mediaArray, somaArray, maximoArray, minimoArray, valorAbsoluto,
  arredondar, isPar, isImpar, calcularPorcentagem, aumentarPorcentagem,
  diminuirPorcentagem, inverterSinal, seno, cosseno, tangente, logaritmoNatural,
  logaritmoBase10, arredondarParaBaixo, arredondarParaCima, hipotenusa,
  grausParaRadianos, radianosParaGraus, mdc, mmc, isPrimo, fibonacci,
  produtoArray, clamp, isDivisivel, celsiusParaFahrenheit, fahrenheitParaCelsius,
  inverso, areaCirculo, areaRetangulo, perimetroRetangulo, isMaiorQue,
  isMenorQue, isEqual, medianaArray, dobro, triplo, metade
} = require('../src/operacoes');

describe('Suíte de Testes Fraca para 50 Operações Aritméticas', () => {
  // === Testes para o Bloco 1 (1-10) ===
  test('1. deve somar dois números positivos', () => { expect(soma(2, 3)).toBe(5); });
  test('2. deve subtrair dois números positivos', () => { expect(subtracao(5, 2)).toBe(3); });
  test('3. deve multiplicar dois números positivos', () => { expect(multiplicacao(3, 4)).toBe(12); });
  test('4. deve dividir e lançar erro para divisão por zero', () => {
    expect(divisao(10, 2)).toBe(5);
    expect(() => divisao(5, 0)).toThrow();
  });
  test('5. deve calcular a potência com expoente positivo', () => { expect(potencia(2, 3)).toBe(8); });
  test('6. deve calcular a raiz quadrada de um quadrado perfeito', () => { expect(raizQuadrada(16)).toBe(4); });
  test('7. deve retornar o resto da divisão', () => { expect(restoDivisao(10, 3)).toBe(1); });
  test('8. deve calcular o fatorial de um número maior que 1', () => { expect(fatorial(4)).toBe(24); });
  test('9. deve calcular a média de um array com múltiplos elementos', () => { expect(mediaArray([10, 20, 30])).toBe(20); });
  test('10. deve somar um array com múltiplos elementos', () => { expect(somaArray([1, 2, 3])).toBe(6); });

  // === Testes para o Bloco 2 (11-20) ===
  test('11. deve encontrar o valor máximo em um array', () => { expect(maximoArray([1, 50, 10])).toBe(50); });
  test('12. deve encontrar o valor mínimo em um array', () => { expect(minimoArray([10, 2, 100])).toBe(2); });
  test('13. deve retornar o valor absoluto de um número negativo', () => { expect(valorAbsoluto(-5)).toBe(5); });
  test('14. deve arredondar um número para cima', () => { expect(arredondar(9.8)).toBe(10); });
  test('15. deve retornar true para um número par', () => { expect(isPar(100)).toBe(true); });
  test('16. deve retornar true para um número ímpar', () => { expect(isImpar(7)).toBe(true); });
  test('17. deve calcular uma porcentagem simples', () => { expect(calcularPorcentagem(50, 200)).toBe(100); });
  test('18. deve aumentar um valor em uma porcentagem', () => { expect(aumentarPorcentagem(100, 10)).toBeCloseTo(110); });
  test('19. deve diminuir um valor em uma porcentagem', () => { expect(diminuirPorcentagem(100, 10)).toBeCloseTo(90); });
  test('20. deve inverter o sinal de um número positivo', () => { expect(inverterSinal(42)).toBe(-42); });
  
  // === Testes para o Bloco 3 (21-30) ===
  test('21. deve calcular o seno de 0', () => { expect(seno(0)).toBe(0); });
  test('22. deve calcular o cosseno de 0', () => { expect(cosseno(0)).toBe(1); });
  test('23. deve calcular a tangente de 0', () => { expect(tangente(0)).toBe(0); });
  test('24. deve calcular o logaritmo natural de Euler', () => { expect(logaritmoNatural(Math.E)).toBe(1); });
  test('25. deve calcular o logaritmo na base 10', () => { expect(logaritmoBase10(100)).toBe(2); });
  test('26. deve arredondar para baixo', () => { expect(arredondarParaBaixo(5.9)).toBe(5); });
  test('27. deve arredondar para cima', () => { expect(arredondarParaCima(5.1)).toBe(6); });
  test('28. deve calcular a hipotenusa de um triângulo retângulo', () => { expect(hipotenusa(3, 4)).toBe(5); });
  test('29. deve converter graus para radianos', () => { expect(grausParaRadianos(180)).toBeCloseTo(Math.PI); });
  test('30. deve converter radianos para graus', () => { expect(radianosParaGraus(Math.PI)).toBeCloseTo(180); });

  // === Testes para o Bloco 4 (31-40) ===
  test('31. deve calcular o MDC de dois números', () => { expect(mdc(10, 5)).toBe(5); });
  test('32. deve calcular o MMC de dois números', () => { expect(mmc(10, 5)).toBe(10); });
  test('33. deve verificar que um número é primo', () => { expect(isPrimo(7)).toBe(true); });
  test('34. deve calcular o 10º termo de Fibonacci', () => { expect(fibonacci(10)).toBe(55); });
  test('35. deve calcular o produto de um array', () => { expect(produtoArray([2, 3, 4])).toBe(24); });
  test('36. deve manter um valor dentro de um intervalo (clamp)', () => { expect(clamp(5, 0, 10)).toBe(5); });
  test('37. deve verificar se um número é divisível por outro', () => { expect(isDivisivel(10, 2)).toBe(true); });
  test('38. deve converter Celsius para Fahrenheit', () => { expect(celsiusParaFahrenheit(0)).toBe(32); });
  test('39. deve converter Fahrenheit para Celsius', () => { expect(fahrenheitParaCelsius(32)).toBe(0); });
  test('40. deve calcular o inverso de um número', () => { expect(inverso(4)).toBe(0.25); });

  // === Testes para o Bloco 5 (41-50) ===
  test('41. deve calcular a área de um círculo', () => { expect(areaCirculo(10)).toBeCloseTo(314.159); });
  test('42. deve calcular a área de um retângulo', () => { expect(areaRetangulo(5, 4)).toBe(20); });
  test('43. deve calcular o perímetro de um retângulo', () => { expect(perimetroRetangulo(5, 4)).toBe(18); });
  test('44. deve verificar se um número é maior que outro', () => { expect(isMaiorQue(10, 5)).toBe(true); });
  test('45. deve verificar se um número é menor que outro', () => { expect(isMenorQue(5, 10)).toBe(true); });
  test('46. deve verificar se dois números são iguais', () => { expect(isEqual(7, 7)).toBe(true); });
  test('47. deve calcular a mediana de um array ímpar e ordenado', () => { expect(medianaArray([1, 2, 3, 4, 5])).toBe(3); });
  test('48. deve calcular o dobro de um número', () => { expect(dobro(10)).toBe(20); });
  test('49. deve calcular o triplo de um número', () => { expect(triplo(10)).toBe(30); });
  test('50. deve calcular a metade de um número', () => { expect(metade(20)).toBe(10); });

  // === Novos Testes — Matando Mutantes Sobreviventes ===

  // divisao: verifica a mensagem de erro (mata mutante StringLiteral L8)
  test('51. deve lançar erro com mensagem correta ao dividir por zero', () => {
    expect(() => divisao(5, 0)).toThrow('Divisão por zero não é permitida.');
  });

  // raizQuadrada: testa entrada negativa e zero (mata ConditionalExpression, EqualityOperator e StringLiteral L13)
  test('52. deve lançar erro ao calcular raiz quadrada de número negativo', () => {
    expect(() => raizQuadrada(-4)).toThrow('Não é possível calcular a raiz quadrada de um número negativo.');
  });
  test('53. deve retornar 0 para raiz quadrada de 0', () => {
    expect(raizQuadrada(0)).toBe(0);
  });

  // fatorial: testa n negativo, n=0 e n=1 (mata ConditionalExpression, EqualityOperator e StringLiteral L18-19)
  test('54. deve lançar erro para fatorial de número negativo', () => {
    expect(() => fatorial(-1)).toThrow('Fatorial não é definido para números negativos.');
  });
  test('55. deve retornar 1 para fatorial de 0', () => {
    expect(fatorial(0)).toBe(1);
  });
  test('56. deve retornar 1 para fatorial de 1', () => {
    expect(fatorial(1)).toBe(1);
  });

  // mediaArray: testa array vazio (mata ConditionalExpression L25)
  test('57. deve retornar 0 para média de array vazio', () => {
    expect(mediaArray([])).toBe(0);
  });

  // maximoArray: testa array vazio (mata ConditionalExpression e StringLiteral L34)
  test('58. deve lançar erro para máximo de array vazio', () => {
    expect(() => maximoArray([])).toThrow('Array vazio не possui valor máximo.');
  });

  // minimoArray: testa array vazio (mata ConditionalExpression e StringLiteral L38)
  test('59. deve lançar erro para mínimo de array vazio', () => {
    expect(() => minimoArray([])).toThrow('Array vazio не possui valor mínimo.');
  });

  // isPar: testa número ímpar retornando false (mata ConditionalExpression L43)
  test('60. deve retornar false para número ímpar em isPar', () => {
    expect(isPar(3)).toBe(false);
  });

  // isImpar: testa número par retornando false (mata ConditionalExpression e ArithmeticOperator L44)
  test('61. deve retornar false para número par em isImpar', () => {
    expect(isImpar(4)).toBe(false);
  });

  // isPrimo: testa n=1, n=0 e número composto (mata 7 mutantes L73-75)
  test('62. deve retornar false para isPrimo(1)', () => {
    expect(isPrimo(1)).toBe(false);
  });
  test('63. deve retornar false para isPrimo(0)', () => {
    expect(isPrimo(0)).toBe(false);
  });
  test('64. deve retornar false para número composto (4)', () => {
    expect(isPrimo(4)).toBe(false);
  });

  // produtoArray: testa array vazio (mata ConditionalExpression L84)
  test('65. deve retornar 1 para produto de array vazio', () => {
    expect(produtoArray([])).toBe(1);
  });

  // clamp: testa valor abaixo do min e acima do max (mata ConditionalExpression L88-89)
  test('66. deve retornar min quando valor é menor que o limite mínimo', () => {
    expect(clamp(-5, 0, 10)).toBe(0);
  });
  test('67. deve retornar max quando valor é maior que o limite máximo', () => {
    expect(clamp(15, 0, 10)).toBe(10);
  });

  // isDivisivel: testa caso não divisível (mata ConditionalExpression L92)
  test('68. deve retornar false quando não é divisível', () => {
    expect(isDivisivel(10, 3)).toBe(false);
  });

  // celsiusParaFahrenheit: testa valor não-zero (mata ArithmeticOperator L93)
  test('69. deve converter 100°C para 212°F corretamente', () => {
    expect(celsiusParaFahrenheit(100)).toBeCloseTo(212);
  });

  // fahrenheitParaCelsius: testa valor não-zero (mata ArithmeticOperator L94)
  test('70. deve converter 212°F para 100°C corretamente', () => {
    expect(fahrenheitParaCelsius(212)).toBeCloseTo(100);
  });

  // inverso: testa lançamento de erro para zero (mata ConditionalExpression e StringLiteral L96)
  test('71. deve lançar erro ao calcular inverso de zero', () => {
    expect(() => inverso(0)).toThrow('Não é possível inverter o número zero.');
  });

  // isMaiorQue: testa caso falso e valores iguais (mata ConditionalExpression e EqualityOperator L104)
  test('72. deve retornar false quando a não é maior que b', () => {
    expect(isMaiorQue(5, 10)).toBe(false);
  });
  test('73. deve retornar false quando a é igual a b em isMaiorQue', () => {
    expect(isMaiorQue(5, 5)).toBe(false);
  });

  // isMenorQue: testa caso falso e valores iguais (mata ConditionalExpression e EqualityOperator L105)
  test('74. deve retornar false quando a não é menor que b', () => {
    expect(isMenorQue(10, 5)).toBe(false);
  });
  test('75. deve retornar false quando a é igual a b em isMenorQue', () => {
    expect(isMenorQue(5, 5)).toBe(false);
  });

  // isEqual: testa valores diferentes (mata ConditionalExpression L106)
  test('76. deve retornar false quando valores são diferentes em isEqual', () => {
    expect(isEqual(5, 10)).toBe(false);
  });

  // medianaArray: testa array vazio, array par desordenado e array ímpar desordenado
  // (mata ConditionalExpression, MethodExpression, ArrowFunction, ArithmeticOperator, StringLiteral L108-111)
  test('77. deve lançar erro para mediana de array vazio', () => {
    expect(() => medianaArray([])).toThrow('Array vazio не possui mediana.');
  });
  test('78. deve calcular mediana de array com número par de elementos (desordenado)', () => {
    expect(medianaArray([4, 1, 3, 2])).toBe(2.5);
  });
  test('79. deve ordenar array antes de calcular mediana (array ímpar desordenado)', () => {
    expect(medianaArray([5, 1, 3])).toBe(3);
  });
});