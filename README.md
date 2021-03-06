# Plutio Developer Skill Test

This test is comprised of 3 parts based on a basic Meteor app. All 3 parts of the test must be completed specifically as instructed without anything additional.

Feel free to use any npm modules. Start the app by running `npm start`. When you are done, zip all files except `.meteor` and `node_modules` and send via job application form.

Good luck.

## Part 1

Refactor `imports/ui/app.js`. Split the file into smaller modules, as many as you feel like. You can create any amount of directories and files you need.

## Part 2

In `imports/api/tasks/methods` you will see 2 empty files `get.js` and `create.js`. You need to create 2 simple methods:

- `get.js` - Get all tasks that does not have `isPrivate` set to `true`. Get method should also support passing query params such as `status` or `hasDescription` and return filtered data.
- `create.js` - Create a new task method. It should only allow setting fields `title`, `status` and `color`.

Use created `create` method to insert a new task when `Enter` button is clicked on `Add new task` form. It should create a task with status of `incomplete` and set `createdAt` field to current date.

Use created `get` method to load tasks and show it in UI replacing dummy tasks.
The logic of task indicators is as follows:

- `icon-description` is visible if `hasDescription` is `true`
- `icon-chat` is visible if `commentsCount` is more than `0`
- `icon-attach` is visible if `filesCount` is more than `0`
- `icon-timer` is visible if `icon-timer` is more than `0`

## Part 3

Write a test of `create` and `get` methods inside `tests` folder. You can run tests with `npm run test`.
