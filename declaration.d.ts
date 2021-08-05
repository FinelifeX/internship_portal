declare module '*.css' {
  const styles: Record<string, string>;
  export default styles;
}

declare module '*.png' {
  const path: string;
  export default path;
}

declare module '*.svg' {
  const path: string;
  export default path;
}