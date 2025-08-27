declare module "@msgs/*.json" {
  const value: Record<string, any>;
  export default value;
}
declare module "*.json" {
  const value: any;
  export default value;
}
