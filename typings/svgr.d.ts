interface SvgrComponent
  extends React.FunctionComponent<React.SVGAttributes<SVGElement>> {}

declare module '*.svg' {
  const ReactComponent: SvgrComponent;

  export default ReactComponent;
}
