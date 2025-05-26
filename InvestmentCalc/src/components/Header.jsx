import Input from "./Input";
export default function Header({onInputChange}) {
  return (
    <>
      <section id="user-input">
        <Input inputLabel="initial Investment" inputChanged={onInputChange}/>
        <Input inputLabel="annual Investment" inputChanged={onInputChange}/>
        <Input inputLabel="expected Return" inputChanged={onInputChange}/>
        <Input inputLabel="duration"inputChanged={onInputChange}/>
      </section>
    </>
  );
}
