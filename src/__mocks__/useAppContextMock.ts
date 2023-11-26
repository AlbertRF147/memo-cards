export default jest.fn().mockReturnValue({
  cards: [
    { value: 1, flipped: false, solved: false, position: 0 },
  ],
  setCards: jest.fn(),
});


