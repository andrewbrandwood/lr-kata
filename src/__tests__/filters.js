describe('when given an array', () =>{
  it('does not return duplicates', () => {
    const arr = ['test', 'test'];

    const removeDuplicates = (arr) => {
      return Array.from(new Set(arr));
    }

    const newArr = removeDuplicates(arr);
    expect(newArr).toHaveLength(1);
  });

})
