async function getStudentActivities() {
    const response = await fetch('http://localhost:3001/activities');
    const data = await response.json();
    return data;
  }
  
async function addStudent(name, day) {
  const activities = await getStudentActivities();
  const matchingActivities = activities.filter(activity =>
    activity.days.includes(day)
  );

  const studentData = {
    name,
    activities: matchingActivities.map(({ name, desc }) => ({ name, desc }))
  };

  const response = await fetch('http://localhost:3001/students', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(studentData)
  });

  const responseData = await response.json();
  return responseData;
}

async function deleteStudent(id) {
  const response = await fetch(`http://localhost:3001/students/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return { message: `Successfully deleted student data with id ${id}` };
}

async function studentActivitiesRegistration(data) {
  const [method, ...args] = data;

  if (method === 'CREATE') {
    const [name, day] = args;
    return addStudent(name, day);
  } else if (method === 'DELETE') {
    const [id] = args;
    return deleteStudent(id);
  } else {
    throw new Error('Invalid method. Use "CREATE" or "DELETE".');
  }
}

async function process_argv() {
  let { argv } = process;
  argv = argv.slice(2);
  const result = await studentActivitiesRegistration(argv);
  return result;
}

process_argv()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err.message);
  });

module.exports = {
  studentActivitiesRegistration,
  getStudentActivities,
  addStudent,
  deleteStudent
};
  