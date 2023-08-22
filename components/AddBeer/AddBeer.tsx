"use client"
import React, { useState, ChangeEvent, FormEvent } from "react";
import { addBeer } from "../../service/request";

interface FormResponse {
  name: string;
  description: string;
  image: File | null; 
}

const AddBeer: React.FC = () => {
  const [formFields, setFormFields] = useState<FormResponse>({
    name: "",
    description: "",
    image: null,
  });
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormFields({ ...formFields, image: file });
  };

  const handleFormData = async (e: FormEvent) => {
    e.preventDefault();

    const formData: FormResponse | FormData = new FormData();

    formData.append("name", formFields.name);
    formData.append("description", formFields.description);
    if (formFields.image !== null) {
      formData.append("image", formFields.image);
    }

    try {
      const result = await addBeer(Object.fromEntries(formData));
      console.log(result);
      if (result.hasError) {
        setErrorMessage(result.errorMessage);
      } else {
        setFormFields({
          name: "",
          description: "",
          image: null,
        });
        setErrorMessage("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleFormData}>
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              value={formFields.name}
              onChange={(e) =>
                setFormFields({ ...formFields, name: e.target.value })
              }
              placeholder="Enter Title"
            />
          </div>
        </div>

        <div className="row">
        <div className="col">
          <textarea
            className="form-control"
            value={formFields.description}
            onChange={(e) =>
              setFormFields({ ...formFields, description: e.target.value })
            }
            placeholder="Enter Description"
          />
        </div>
        </div>

        <div className="row">
          <div className="col">
            <input
              type="file"
              className="form-control"
              onChange={handleImage}
            />
          </div>
          <div className="col">
            {formFields.image && (
              <img
                src={URL.createObjectURL(formFields.image)}
                style={{ width: "100px" }}
                alt="Selected"
              />
            )}
          </div>
        </div>

        <div className="row">
          <div className="col">
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddBeer;
