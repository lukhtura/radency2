// core
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useAppDispatch, useAppSelector } from 'engine/redux/hooks';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import useCRUD from 'engine/hooks/useCRUD';

// components
import { MenuItem, TextField, Paper, Box } from '@mui/material/';
import Select from '@mui/material/Select';
import CustomButton from 'components/CustomButton';

// actions

import { closeFormModal } from 'engine/redux/slices/formModalSlice';

// types
import { FormData } from 'types';

// styles
import styles from 'components/FormModal/formModal.module.scss';

// assets
import closeIcon from 'assets/close-icon.svg';

const FormModal = () => {
  const dispatch = useAppDispatch();
  const { isFormModalOpen, title, content, category, id } = useAppSelector(
    (state) => state.formModalSlice
  );

  const { addNote } = useCRUD();

  // SCHEMA FOR FORM VALIDATION
  const schema = yup
    .object({
      title: yup
        .string()
        .required()
        .min(3, 'at least 3 chars')
        .max(13, 'max. 13 chars'),
      content: yup
        .string()
        .required()
        .min(3, 'at least 3 chars')
        .max(100, 'max. 100 chars'),
      category: yup.string().required(),
    })
    .required();

  // REACT HOOK FORM
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      title,
      content,
      category,
    },
    resolver: yupResolver(schema),
  });

  /* UPDATES FORM VALUES FROM FORM STATE SLICE */
  function updateFormValues(): void {
    reset({
      title,
      content,
      category,
    });
  }

  useEffect(() => {
    if (isFormModalOpen) {
      updateFormValues();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFormModalOpen]);

  //  SUBMIT HANDLER
  const onSubmit: SubmitHandler<FormData> = (data) => {
    addNote(data);
  };

  const buttonText: string = id ? 'Add note' : 'Save';

  if (!isFormModalOpen) return null;

  const view = (
    <div className={styles.overlay}>
      <Box>
        <Paper className={styles.wrapper} elevation={3}>
          <img
            onClick={() => dispatch(closeFormModal())}
            src={closeIcon}
            alt="close"
            className={`${styles.closeBtn} btn`}
          />
          {/* FORM */}

          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Controller
                name="title"
                control={control}
                render={({ field }) => (
                  <TextField
                    inputProps={{ maxLength: 13 }}
                    className={styles.textInput}
                    label="Title"
                    variant="outlined"
                    {...field}
                  />
                )}
              />
              {errors.title && (
                <p className={styles.error}>{errors.title.message}</p>
              )}
            </div>
            <div>
              <Controller
                name="content"
                control={control}
                render={({ field }) => (
                  <TextField
                    inputProps={{ maxLength: 100 }}
                    className={styles.textInput}
                    label="Content"
                    variant="outlined"
                    {...field}
                  />
                )}
              />
              {errors.content && (
                <p className={styles.error}>{errors.content.message}</p>
              )}
            </div>
            <Controller
              control={control}
              name="category"
              defaultValue="task"
              render={({ field }) => (
                <Select
                  {...field}
                  onChange={(e) => field.onChange(e.target.value)}
                >
                  <MenuItem value="task">task</MenuItem>
                  <MenuItem value="idea">idea</MenuItem>
                  <MenuItem value="random thoughts">random thoughts</MenuItem>
                </Select>
              )}
            />
            <CustomButton type="submit">{buttonText}</CustomButton>
          </form>

          {/* FORM END */}
        </Paper>
      </Box>
    </div>
  );

  return ReactDOM.createPortal(
    view,
    document.getElementById('modal') as Element
  );
};

export default FormModal;
