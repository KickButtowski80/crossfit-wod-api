const Record = require("../database/Record");
// const Members = require('../database/Record')

const getRecordForWorkout = (workoutId) => {
  try {
    const record = Record.getRecordForWorkout(workoutId);
    return record;
  } catch (error) {
    throw error;
  }
};


const getMember = (memberId) => {
  const member = Record.getMember(memberId)
  return member;
}

module.exports = { 
  getRecordForWorkout,
  getMember,
};