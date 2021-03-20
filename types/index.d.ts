declare module '*.html' {
  const content: string;
  export default content;
}

declare module '*.css' {
  const content: Module;
  export default content;
}

declare module '*.svg' {
  const content: string;
  export default content;
}