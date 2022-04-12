import { renderPost } from '../../src/components/post';

jest.mock('../../src/lib/firebaseFunctions.js');
describe('post test', () => {
  it('Al renderizarse, post debe contener', () => {
    // falla proque no puede leer doc. 
    expect(renderPost(doc).innerHTML).toContain('p');
  });
});
