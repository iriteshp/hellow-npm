module.exports = {
  "branches": [
    "next"
  ],
  "ci": false,
  "extends": [
    "semantic-release-monorepo"
  ],
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    [
      "@semantic-release/npm",
      {
        "assets": [
          "package.json",
          "packages/*/package.json"
        ],
        "npmPublish": true,
        "lastRelease": "latest"
      }
    ],

    "@semantic-release/git"
  ],
  "initialVersion": "1.6.0",
  "dryRun": false,
  "repositoryUrl": "https://github.com/iriteshp/hellow-npm"
}
