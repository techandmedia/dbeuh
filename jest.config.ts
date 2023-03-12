const { getJestProjects } = require('@nrwl/jest');

module.exports = {
  'ts-jest': {
    tsConfig: './tsconfig.base.json',
  },
  setupFilesAfterEvent: ['./jest.setup.ts'],
  projects: getJestProjects(),
};
