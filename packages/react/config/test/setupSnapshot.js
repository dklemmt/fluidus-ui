module.exports = {
  /**
   * configuration to save snapshots in the same directory
   */

  // resolves from test to snapshot path
  resolveSnapshotPath: (testPath, snapshotExtension) =>
    testPath + snapshotExtension,

  // resolves from snapshot to test path
  resolveTestPath: (snapshotFilePath, snapshotExtension) =>
    snapshotFilePath.slice(0, -snapshotExtension.length),

  /**
   * configuration to save snapshots in subdirectory '__snapshots__'
   */

  /* resolveSnapshotPath: (testPath, snapshotExtension) =>
    testPath.replace('__tests__', '__snapshots__') + snapshotExtension,

  resolveTestPath: (snapshotFilePath, snapshotExtension) =>
    snapshotFilePath.replace('__snapshots__', '__tests__').slice(0, -snapshotExtension.length), */

  testPathForConsistencyCheck:
    "../../src/components/Divider/__tests__/Divider.test.tsx",
};
