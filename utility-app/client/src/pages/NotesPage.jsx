import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { notesSchema } from "../validations";
import { useMutation, useQuery } from "react-query";
import { API_INSTANCE } from "../api";
import { toast } from "react-hot-toast";
import { nanoid } from "nanoid";
import NoteCard from "../components/NoteCard";
import { useState } from "react";
import Loader from "../components/Loader";
import SectionLayout from "../layout/SectionLayout";
const NotesPage = () => {
  const [editMode, seteditMode] = useState(false);
  const [editedObject, setEditedObject] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(notesSchema),
  });

  const { data, refetch, isLoading } = useQuery(
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

  const editMutation = useMutation(
    ({ id, data }) => API_INSTANCE.put(`/notes/update-note/${id}`, data),
    {
      onSuccess: () => {
        toast.success("Note edited successfully");
        refetch();
      },
    }
  );

  const onSubmit = (data) => {
    if (editMode) {
      editMutation.mutate({ id: editedObject._id, data });
      seteditMode(false);
      reset({ title: "", description: "", color: "" });
    } else {
      reset();
      console.log(data);
      mutation.mutate(data);
    }
  };

  const onDelete = (id) => {
    console.log("ID: ", id);
    deleteMutation.mutate(id);
  };

  const onEdit = (note) => {
    console.log("NOTE TO BE EDITED: ", note);
    seteditMode((prevState) => !prevState);
    setEditedObject(note);
    reset({
      title: note.title,
      description: note.description,
      color: note.color,
    });
  };
  return (
    <SectionLayout sectionTitle="Notes">
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
              value={"bg-primary"}
            />
            <input
              {...register("color")}
              className="radio radio-secondary"
              type="radio"
              name="color"
              id=""
              value={"bg-secondary"}
            />
            <input
              {...register("color")}
              className="radio radio-accent"
              type="radio"
              name="color"
              id=""
              value={"bg-accent"}
            />
            <input
              {...register("color")}
              className="radio radio-warning"
              type="radio"
              name="color"
              id=""
              value={"bg-warning"}
            />
            <input
              {...register("color")}
              className="radio radio-info"
              type="radio"
              name="color"
              id=""
              value={"bg-info"}
            />
            {errors.color && (
              <p className="text-red-400">{errors.color?.message}</p>
            )}
          </div>
        </div>
        <button className="btn btn-primary btn-wide">
          {editMode ? "EDIT NOTE" : "ADD NOTE"}
        </button>
      </form>

      {isLoading ? (
        <Loader />
      ) : (
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
      )}
    </SectionLayout>
  );
};

export default NotesPage;
