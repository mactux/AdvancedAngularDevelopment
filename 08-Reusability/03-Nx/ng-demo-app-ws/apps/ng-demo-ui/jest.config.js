module.exports = {
  name: 'ng-demo-ui',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ng-demo-ui',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
