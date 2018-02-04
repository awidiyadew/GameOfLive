import Universe from '../src/Universe';
import Block from '../src/Block';
import Cell from '../src/Cell';
import {expect} from 'chai';

describe('Universe', () => {
  describe('#addCell', () => {
    it('should has 0 cell if no cell added', () => {
      const universe = new Universe();
      const actualAliveCells = universe.getAliveCell();
      expect(actualAliveCells.length).to.eq(0);
    });

    it('should has 1 cell if 1 cell added', () => {
      const universe = new Universe();
      const cell00 = new Cell(new Block(0, 0));
      universe.addCell(cell00);
      const actualAliveCells = universe.getAliveCell();
      expect(actualAliveCells.length).to.eq(1);
    });

    it('add Cell{0, 0}, should return Cell{0, 0} with the data index', () => {
      const universe = new Universe();
      const block00 = new Block(0, 0);
      const inputCell00 = new Cell(block00);
      universe.addCell(inputCell00);

      const aliveCellInUniverse = universe.getAliveCell();
      const cellIndex = aliveCellInUniverse.length - 1;
      const actualCellInUniverse = aliveCellInUniverse[cellIndex];
      expect(actualCellInUniverse.equals(inputCell00)).to.be.true;
    });

    it('should not addCell if input is undefined', () => {
      const universe = new Universe();
      universe.addCell(undefined);
      const cellInUniverse = universe.getAliveCell();
      expect(cellInUniverse.length).to.eq(0);
    });
  });
});