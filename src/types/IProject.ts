import ProjectArea from '^/enums/ProjectArea';

export default interface IProject {
  title: string;
  description: string;
  madeAt?: string;
  area: ProjectArea;
  image: string;
  link: string;
}
