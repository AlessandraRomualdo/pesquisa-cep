import getCep  from "./main";

import fetch from 'node-fetch'; //necessário em versões abaixo do Node 18.
global.fetch = fetch; //necessário em versões abaixo do Node 18.

describe('Quando a requisição é bem sucedida, ela retorna os dados esperados', () => {
  test('Deve retornar os dados quando passado um cep válido', async () => {
    const result = await getCep('30130010');
    expect(result.cep).toBe('30130-010');
    expect(result.logradouro).toBe('Praça Sete de Setembro');
    expect(result.bairro).toBe('Centro');
    expect(result.uf).toBe('MG');
  })
});