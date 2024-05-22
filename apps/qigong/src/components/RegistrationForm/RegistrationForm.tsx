import { useState } from "react";
import {
  useForm,
  Controller,
  SubmitHandler,
  SubmitErrorHandler,
} from "react-hook-form";
import { Button, Select } from "antd";
import { Checkbox, Flex, Heading, Input, Paragraph } from "@fluidus-ui/react";
import "./RegistrationForm.scss";

interface IFormInput {
  salutation: string;
  firstName: string;
  surname: string;
  street: string;
  zip: string;
  city: string;
}

export const RegistrationForm = () => {
  const requiredErrorInput = "Dieses Feld bitte ausfüllen!";
  const [salutation, setSalutation] = useState("");
  const [formData, setFormData] = useState({});
  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();
  // } = useForm<IFormInput>({ defaultValues: { salutation: "Bitte wählen" } });
  const handleRegistration: SubmitHandler<IFormInput> = (data) => {
    console.log({ data });
    setFormData(data);
  };
  // const handleError: SubmitErrorHandler<IFormInput> = (errors) => {
  //   console.log({ errors });
  // };

  return (
    <form onSubmit={handleSubmit(handleRegistration)}>
      <Heading size="small">Anmeldung zum Kurs</Heading>
      <Flex direction="vertical" gap="small" justify="center">
        <Paragraph>{JSON.stringify(formData)}</Paragraph>
        {/*<Flex gap="small" vertical>*/}
        {/*<select*/}
        {/*  name="salutation"*/}
        {/*  value={salutation}*/}
        {/*  onChange={(event) => setSalutation(event.target.value)}*/}
        {/*>*/}
        {/*  <option value="">— Bitte wählen —</option>*/}
        {/*  <optgroup label="Anrede">*/}
        {/*    <option value="herr">Herr</option>*/}
        {/*    <option value="frau">Frau</option>*/}
        {/*    <option value="divers">Divers</option>*/}
        {/*  </optgroup>*/}
        {/*</select>*/}
        <Controller
          name="salutation"
          control={control}
          rules={{ required: requiredErrorInput }}
          render={({ field }) => (
            <Select
              defaultValue="Bitte wählen"
              options={[
                { value: "herr", label: "Herr" },
                { value: "frau", label: "Frau" },
                { value: "divers", label: "Divers" },
              ]}
              status={errors?.salutation ? "error" : ""}
              style={{ width: "min(100%, 40ch)" }}
              {...field}
            />
          )}
        />

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
        <Input
          label="Straße"
          error={!!errors?.street}
          errorText={errors?.street?.message}
          {...register("street", { required: requiredErrorInput })}
        />
        <Input
          label="PLZ"
          error={!!errors?.zip}
          errorText={errors?.zip?.message}
          {...register("zip", { required: requiredErrorInput })}
        />
        <Input
          label="Ort"
          error={!!errors?.city}
          errorText={errors?.city?.message}
          {...register("city", { required: requiredErrorInput })}
        />

        <Checkbox>
          Meine Teilnahme erfolgt auf eigene Gefahr und Verantwortung.
        </Checkbox>
        <Checkbox>
          Ich stimme der Speicherung und Verarbeitung meiner personenbezogenen
          Daten im Rahmen des Online Kurses zu. Diese dienen ausschließlich der
          Rechnungsstellung, der kursbezogenen Kommunikation und des Versands
          der Teilnahmebestätigung.
        </Checkbox>
        <Button type="primary" style={{ width: "min(100%, 40ch)" }}>
          Submit
        </Button>
        <button type="submit">Submit</button>
      </Flex>
    </form>
  );
};

export default RegistrationForm;
