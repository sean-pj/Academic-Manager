const stubData = {
  students: [
    { id: 1, name: "Emma Johnson", age: 10, email: "emma.johnson@school.com" },
    { id: 2, name: "Liam Smith", age: 9, email: "liam.smith@school.com" },
    { id: 3, name: "Sophia Brown", age: 11, email: "sophia.brown@school.com" },
    {
      id: 4,
      name: "Noah Williams",
      age: 10,
      email: "noah.williams@school.com",
    },
    { id: 5, name: "Olivia Davis", age: 9, email: "olivia.davis@school.com" },
  ],

  teachers: [
    {
      id: 1,
      name: "Mrs. Anderson",
      subject: "Math",
      email: "anderson@school.com",
    },
    {
      id: 2,
      name: "Mr. Thompson",
      subject: "Science",
      email: "thompson@school.com",
    },
    {
      id: 3,
      name: "Ms. Rivera",
      subject: "English",
      email: "rivera@school.com",
    },
    { id: 4, name: "Mr. Green", subject: "History", email: "green@school.com" },
    { id: 5, name: "Mrs. White", subject: "Music", email: "white@school.com" },
  ],

  courses: [
    { id: 1, name: "Basic Math", teacherId: 1, studentsEnrolled: [1, 3, 5] },
    {
      id: 2,
      name: "Science Experiments",
      teacherId: 2,
      studentsEnrolled: [2, 4, 5],
    },
    {
      id: 3,
      name: "Creative Writing",
      teacherId: 3,
      studentsEnrolled: [1, 2, 3],
    },
    { id: 4, name: "World History", teacherId: 4, studentsEnrolled: [3, 4, 5] },
    {
      id: 5,
      name: "Beginner Music",
      teacherId: 5,
      studentsEnrolled: [1, 2, 4],
    },
  ],
};

export default stubData;
