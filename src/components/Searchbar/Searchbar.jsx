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
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </Form>
</Header>
    )
};