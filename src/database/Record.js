const DB = require("./db.json");

const getRecordForWorkout = (workoutId) => {
  try {
    const record = DB.records.filter((record) => record.workout === workoutId);
    if (!record) {
      throw {
        status: 400,
        message: `Can't find workout with the id '${workoutId}'`,
      };
    }
    return record;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const getMember = (memberId) => {
  try {
    const recordOfMemberId = DB.records.filter((record) => record.memberId === memberId)
    const member = DB.members.filter((member) => member.id === recordOfMemberId)
    return member
  } catch (error) {
    throw error
  }
}
module.exports = {
  getRecordForWorkout,
  getMember
};