import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

export const Modal = ({ onSubmit, inputs, modalId, validationSchema }) => {
  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleFormSubmit = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <dialog id={modalId} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click the button below to close</p>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          {inputs?.map((input) => (
            <div key={nanoid()} className="form-control">
              <label htmlFor={input.name} className="label">
                <span className="label-text">{input.label}</span>
              </label>
              <Controller
                name={input.name}
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type={input.type}
                    placeholder={input.placeholder}
                    className="input input-bordered"
                  />
                )}
              />
              {errors[input.name] && (
                <p className="text-red-500 text-sm mt-1">
                  {errors[input.name]?.message}
                </p>
              )}
            </div>
          ))}
          <div className="flex justify-between mt-4">
            <button type="submit" className="btn btn-primary">
              Save Title
            </button>
            <button
              onClick={() => document.getElementById(modalId).close()}
              type="button"
              className="btn"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

Modal.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  inputs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
    })
  ),
  modalId: PropTypes.string.isRequired,
  validationSchema: PropTypes.object.isRequired,
};
