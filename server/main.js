import { Meteor } from 'meteor/meteor';
import {getTask} from '../imports/api/tasks/methods/get';
import {createTask} from '../imports/api/tasks/methods/create';
import {Tasks} from '/imports/api/tasks';

const testData = [
  {
    title: 'Task1',
    hasDescription: true,
    commentsCount: 2,
    color: '#4e42c3',
    status: 'incomplete'
  },
  {
    title: 'Task2',
    status: 'incomplete'
  },
  {
    title: 'Task3',
    hasDescription: true,
    filesCount: 3,
    status: 'incomplete'
  },
  {
    title: 'Task4',
    hasDescription: true,
    commentsCount: 3,
    totalTimeTracked: 15,
    status: 'incomplete'
  },
  {
    title: 'Task5',
    status: 'completed'
  },
  {
    title: 'Task6',
    status: 'completed',
    commentsCount: 5
  },
  {
    title: 'Task7',
    status: 'completed',
    isPrivate: true
  }
];

Meteor.startup(async () => {
  console.log(Tasks.find().count());
  if (Tasks.find().count() === 0) {
    testData.forEach(task => Tasks.insert(task));
  }
  Tasks.allow({
    insert: function () {
      return true;
    }
  });
});

Meteor.methods({
  'insertTask': createTask,
  'getTask': getTask
});
