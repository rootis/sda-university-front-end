export interface StudyProgram {
  id: number;
  title: string;
  modules: number[];
}

export interface Module {
  id: number;
  title: string;
}

export interface University {
  id: number;
  title: string;
  name: string;
  numberOfStudyProgrms: number;
  numberOfModules: number;
  studyPrograms: StudyProgram[];
  modules: Module[];
}
