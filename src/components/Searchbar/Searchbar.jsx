import { Header, Form, FormButton, FormLabel, FormInput } from "./Searchbar.styled";


// props onSubmit - функція для передачі значення інпута під час сабміту форми
export const Searchbar = () => {
    return (
    <Header>
  <Form>
    <FormButton type="submit">
      <FormLabel></FormLabel>
    </FormButton>

    <FormInput
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </Form>
</Header>
    )
};