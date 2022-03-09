export * from './components/Button';
let version: string = "0.0.1";

const getVersion = () => {
  return `this version is ${version}`;
}

export default getVersion;