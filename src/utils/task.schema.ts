import * as Yup from 'yup';

export const taskSchema = Yup.object().shape({
  title: Yup.string().required('Task title is required'),
  reminderDate: Yup.string().required('Reminder date is required'),
  reminderTime: Yup.string().required('Reminder time is required'),
  description: Yup.string().required('Task description is required'),
});
