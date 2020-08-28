declare module '*.svg' {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}

interface GameResponse {
    title: string;
    id: number;
    sortName: string;
    isFullyOptimized: boolean;
    steamUrl: string;
    store: string;
    publisher: string;
    genres: string[];
    status: string;
  
  }