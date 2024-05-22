import { useState } from "react";
import {
  useForm,
  Controller,
  SubmitHandler,
  SubmitErrorHandler,
} from "react-hook-form";
import { Button } from "antd";
import { Flex, Input, Paragraph, Textarea } from "@fluidus-ui/react";
import "./ContactForm.scss";

interface IFormInput {
  firstName: string;
  surname: string;
  email: string;
}

export const ContactForm = () => {
  const requiredErrorInput = "Dieses Feld bitte ausfüllen!";
  const [formData, setFormData] = useState({});
  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();
  // } = useForm<IFormInput>({ defaultValues: { salutation: "Bitte wählen" } });
  const handleContact: SubmitHandler<IFormInput> = (data) => {
    console.log({ data });
    setFormData(data);
  };

  return (
    <form onSubmit={handleSubmit(handleContact)}>
      <Flex direction="vertical" gap="small" justify="center">
        <Paragraph>{JSON.stringify(formData)}</Paragraph>
        <Input
          label="Vorname"
          error={!!errors?.firstName}
          errorText={errors?.firstName?.message}
          {...register("firstName", { required: requiredErrorInput })}
        />
        <Input
          label="Nachname"
          error={!!errors?.surname}
          errorText={errors?.surname?.message}
          {...register("surname", { required: requiredErrorInput })}
        />
        <Textarea label="Ihre Nachricht" />
        <Button type="primary" style={{ width: "min(100%, 40ch)" }}>
          Submit
        </Button>
        <button type="submit">Submit</button>
      </Flex>
    </form>
  );
};

export default ContactForm;
