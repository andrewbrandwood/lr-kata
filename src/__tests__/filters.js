import { removeDuplicates } from '../common/functions';

describe('when given an array', () =>{
  it('does not return duplicates', () => {
    const arr = ['test', 'test'];
    const newArr = removeDuplicates(arr);
    expect(newArr).toHaveLength(1);
  });

})
