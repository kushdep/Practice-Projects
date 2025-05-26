import Input from "./Input";
export default function Header() {
  return (
    <>
      <section id="user-input">
        <Input inputLabel="INITAL INVESTMENT"/>
        <Input inputLabel="ANNUAL INVESTMENT"/>
        <Input inputLabel="EXPECTED RETURN"/>
        <Input inputLabel="DURATION"/>
      </section>
    </>
  );
}
