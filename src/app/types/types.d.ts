interface StudyProgram {
  id: number;
  title: string;
  universityCode: string;
  modules: Module[];
}

interface Module {
  id: number;
  title: string;
}

interface University {
  id: number;
  code: string;
  title: string;
  numberOfStudyPrograms: number;
  studyPrograms: StudyProgram[];
}
