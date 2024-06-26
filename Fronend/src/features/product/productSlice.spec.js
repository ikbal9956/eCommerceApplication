import counterReducer, {
  increment,

} from './productSlice';

describe('counter reducer', () => {
  const initialState = {
    value: 3,
    status: 'idle',
  };
  it('should handle increment', () => {
    const actual = counterReducer(initialState, increment());
    expect(actual.value).toEqual(4);
  });  
});
