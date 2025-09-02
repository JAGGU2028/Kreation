

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  projectUrl: string;
}