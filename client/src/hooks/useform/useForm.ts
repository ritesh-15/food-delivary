import { ChangeEvent, FormEvent, useEffect, useState } from "react";

const useForm = (
  initialValue: any,
  validator: (values: any) => any,
  callback: (values: any) => any
) => {
  const [values, setValues] = useState(initialValue);
  const [errors, setErrors] = useState<any>({});
  const [isSubmiting, setIsSubmiting] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrors(validator(values));
    setIsSubmiting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmiting) {
      callback(values);
    }
  }, [errors]);

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
