export type getEventResponse = {
  totalEvent: number;
  page: number;
  limit: number;
  events: {
    id: string;
    date: string;
    name: string;
    image: string;
    description: string;
    time: string;
  }[];
};

export type getSubjectAndTeacherResponse = {
  data: {
    subject: string;
    teachers: {
      teacherId: number;
      teacherName: string;
      teacherImage: string;
    }[];
  }[];
};

export type getSubjectsResponse = {
  data: {
    name: string;
    code: string;
    year: number;
    term: number;
    major: "it" | "civil" | "ep" | "ec" | "mc" | "archi" | "none";
    id: string;
  }[];
};

export type getOneStudentResponse = {
  id: string;
  name: string;
  image: string;
  email: string;
  password: string;
  year: number;
  term: number;
  major: "it" | "civil" | "ep" | "ec" | "mc" | "archi" | "none";
  gender: "male" | "female";
  rollNum: number;
};

export type getStudentsResponse = {
  data: {
    id: string;
    name: string;
    image: string;
    email: string;
    password: string;
    year: number;
    term: number;
    major: "it" | "civil" | "ep" | "ec" | "mc" | "archi" | "none";
    gender: "male" | "female";
    rollNum: number;
  }[];
  total: {
    count: number;
  };
  page: number;
  limit: number;
};

export type getTeacherResponse = {
  data: {
    id: string;
    image: string;
    name: string;
    email: string;
    major: string;
    teachYear: [];
    subjects: [];
    gender: string;
  }[];
  total: {
    count: number;
  };
  page: number;
  limit: number;
};

type ExamType = {
  date: string;
  id: string;
  name: string;
  year: number;
  term: number;
  major: "it" | "civil" | "ep" | "ec" | "mc" | "archi" | "none";
  description: string;
  time: string;
  examType: "tutorial" | "assignment" | "final";
};

export type getExamResponse = {
  final: ExamType[];
  tutorial: ExamType[];
  assignment: ExamType[];
};

export type getStudnetsAndSubjectsResponse = {
  students: {
    studentId: string;
    studentName: string;
    studentRollNum: number;
  }[];
  subjects: {
    subjectId: string;
    subjectName: string;
  }[];
};

export type SubjectResult = {
  subject: string;
  marks: string;
};

export type StudentResult = {
  roll: number;
  photo: string;
  name: string;
  year: number;
  major: string;
  term: "First" | "Second";
  gender: "Male" | "Female";
  result: SubjectResult[];
};

export type getResultsResponse = {
  data: StudentResult[];
};

export type getTimetableRowData = {
  data: {
    id: string;
    day: string;
    time: string;
    status: "present" | "absent";
    subjectName: string;
    year: number;
    term: number;
    timetableId: string;
  }[];
};
