import styled from "styled-components";
function Contact() {
  return (
    <div>
      <Heading>Contact Page</Heading>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <InputElement type="text" placeholder="Name" />
        <InputElement type="email" placeholder="Email" />
        <SubmitBtn>Submit</SubmitBtn>
      </form>
    </div>
  );
}

const Heading = styled.h1`
  font-size: 36px;
  font-weight: 600;
  padding: 8px;
  margin: 8px;
`;

const InputElement = styled.input`
  border: 1px solid;
  margin: 4px;
  padding: 4px;
`;

const SubmitBtn = styled.button`
  border: 1px solid;
  background-color: #ccc;
  margin: 4px;
  padding: 4px;
`;

export default Contact;
