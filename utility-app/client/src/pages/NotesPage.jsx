import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { notesSchema } from "../validations";
import { useMutation, useQuery } from "react-query";
import { API_INSTANCE } from "../api";
import { toast } from "react-hot-toast";
import { nanoid } from "nanoid";
import NoteCard from "../components/NoteCard";
const NotesPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(notesSchema),
  });

  const { data, refetch } = useQuery(
    "notes",
    async () => {
      const response = await API_INSTANCE.get("notes/get-all-notes");
      return response.data;
    },
    {
      onSuccess: (data) => {
        console.log("NOTES DATA: ", data);
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );

  const mutation = useMutation(
    (data) => API_INSTANCE.post("/notes/create-note", data),
    {
      onSuccess: () => {
        refetch();
        reset();
        toast.success("Note created successfully");
      },
    }
  );

  const deleteMutation = useMutation(
    (id) => API_INSTANCE.delete(`/notes/delete-note/${id}`),
    {
      onSuccess: () => {
        toast.success("Note Deleted Successfully");
        refetch();
      },
    }
  );

  const onSubmit = (data) => {
    console.log(data);
    mutation.mutate(data);
  };

  const onDelete = (id) => {
    console.log("ID: ", id);
    deleteMutation.mutate(id);
  };

  const onEdit = (note) => {
    console.log("NOTE TO BE EDITED: ", note);
  };

  return (
    <div className="p-6 w-[96%] mx-auto bg-base-300 rounded-xl">
      <h1 className="text-2xl">Notes</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Enter Note title</span>
          </label>
          <input
            {...register("title")}
            className="input input-bordered"
            type="text"
            name="title"
            id=""
          />
          {errors.title && (
            <p className="text-red-400">{errors.title?.message}</p>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Enter Note Description</span>
          </label>
          <textarea
            {...register("description")}
            className="textarea textarea-bordered"
            type="text"
            name="description"
            id=""
          />
          {errors.description && (
            <p className="text-red-400">{errors.description?.message}</p>
          )}
        </div>
        <div className="form-control p-4">
          <label className="block text-sm font-medium text-gray-700">
            Pick color
          </label>
          <div className="flex gap-4 mt-4">
            <input
              {...register("color")}
              className="radio radio-primary"
              type="radio"
              name="color"
              id=""
              value={"primary"}
              defaultChecked
            />
            <input
              {...register("color")}
              className="radio radio-secondary"
              type="radio"
              name="color"
              id=""
              value={"secondary"}
            />
            <input
              {...register("color")}
              className="radio radio-accent"
              type="radio"
              name="color"
              id=""
              value={"accent"}
            />
            <input
              {...register("color")}
              className="radio radio-success"
              type="radio"
              name="color"
              id=""
              value={"success"}
            />
            <input
              {...register("color")}
              className="radio radio-info"
              type="radio"
              name="color"
              id=""
              value={"info"}
            />
            {errors.color && (
              <p className="text-red-400">{errors.color?.message}</p>
            )}
          </div>
        </div>
        <button className="btn btn-primary btn-wide">Add Note</button>
      </form>

      <div className="grid grid-cols-4 gap-4 mt-4">
        {data?.notes.map((note) => {
          return (
            <NoteCard
              note={note}
              onDelete={onDelete}
              onEdit={onEdit}
              key={nanoid()}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NotesPage;
