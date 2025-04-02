import React, {FC, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Formik} from 'formik';
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';
import styles from './style';
import {colors} from '../../theme/colors';
import {taskSchema} from '../../utils/task.schema';
import CustomButton from '../../components/CustomButton/CustomButton';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import CustomTextArea from '../../components/CustomTextArea/CustomTextArea';
import {useDispatch} from 'react-redux';
import {editTask} from '../../store/slices/taskSlice';
import ToastPopUp from '../../utils/ToastPopUp';
import {RootStackParamsList} from '../../Navigator/RootStackParamsList';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type EditScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamsList,
  'EditTask'
>;

type EditTaskRouteProp = RouteProp<RootStackParamsList, 'EditTask'>;

const EditTaskScreen: FC = () => {
  const [disabled, setDisabled] = useState(false);
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [openTimePicker, setOpenTimePicker] = useState(false);

  const navigation = useNavigation<EditScreenNavigationProp>();
  const dispatch = useDispatch();

  const route = useRoute<EditTaskRouteProp>();
  const {task} = route.params; // Retrieve the task data

  const handleEditTask = (updatedTask: any, taskId: string) => {
    setDisabled(true); // Disable the button before dispatching

    try {
      dispatch(editTask({...updatedTask, id: taskId}));
      ToastPopUp('Task Saved Successfully');
      navigation.navigate('Home' as never);
    } catch (error) {
      ToastPopUp('Failed to save task. Please try again.');
      setDisabled(false); // Re-enable the button on error
    }
  };

  const handleGoToHome = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerPosition}>
        <View style={styles.headerProperties}>
          <TouchableOpacity onPress={handleGoToHome}>
            <Ionicons name="arrow-back-circle" size={28} color={colors.black} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Edit Task</Text>
          <TouchableOpacity onPress={handleGoToHome}>
            <Ionicons name="home" size={24} color={colors.black} />
          </TouchableOpacity>
        </View>

        {/* Task Form */}
        <ScrollView contentContainerStyle={{paddingBottom: 105}}>
          <View style={styles.taskFormPosition}>
            <Formik
              validationSchema={taskSchema}
              initialValues={{
                title: task?.title || '',
                reminderDate: task?.reminderDate || '',
                reminderTime: task?.reminderTime || '',
                description: task?.description || '',
              }}
              onSubmit={values => {
                handleEditTask(values, task?.id);
                console.log('Form Submitted:', values);
              }}>
              {({
                handleChange,
                handleSubmit,
                setFieldValue,
                values,
                touched,
                errors,
                resetForm,
              }) => (
                <>
                  <View style={styles.inputHeaderStyle}>
                    <Text style={styles.inputHeaderText}>Title</Text>
                    <CustomTextInput
                      value={values.title}
                      onChange={handleChange('title')}
                      placeholder="Task Title"
                      placeholderTextColor={colors.gray}
                    />
                    {touched.title && errors.title && (
                      <Text style={styles.errorText}>
                        {errors.title.toString()}
                      </Text>
                    )}
                  </View>

                  {/* Reminder Date */}
                  <View style={styles.inputPosition}>
                    <View style={styles.inputHeaderStyle}>
                      <Text style={styles.inputHeaderText}>Date</Text>
                      <CustomTextInput
                        value={values.reminderDate}
                        onChange={handleChange('reminderDate')}
                        placeholder="Reminder Date"
                        placeholderTextColor={colors.gray}
                        icon={
                          <FontAwesome
                            name="calendar-plus-o"
                            size={24}
                            color={colors.black}
                          />
                        }
                        onIconPress={() => setOpenDatePicker(true)}
                      />
                      {touched.reminderDate && errors.reminderDate && (
                        <Text style={styles.errorText}>
                          {errors.reminderDate.toString()}
                        </Text>
                      )}
                    </View>
                    {/* Date Picker */}
                    <DatePicker
                      modal
                      open={openDatePicker}
                      mode="date"
                      date={
                        values.reminderDate
                          ? moment(values.reminderDate, 'D MMMM, YYYY').toDate()
                          : new Date()
                      }
                      onConfirm={date => {
                        setOpenDatePicker(false);
                        setFieldValue(
                          'reminderDate',
                          moment(date).format('D MMMM, YYYY'),
                        );
                      }}
                      onCancel={() => setOpenDatePicker(false)}
                    />
                  </View>

                  {/* Reminder Time */}
                  <View style={styles.inputPosition}>
                    <View style={styles.inputHeaderStyle}>
                      <Text style={styles.inputHeaderText}>Time</Text>
                      <CustomTextInput
                        value={values.reminderTime}
                        onChange={handleChange('reminderTime')}
                        placeholder="Reminder Time"
                        placeholderTextColor={colors.gray}
                        icon={
                          <Fontisto
                            name="clock"
                            size={24}
                            color={colors.black}
                          />
                        }
                        onIconPress={() => setOpenTimePicker(true)}
                      />
                      {touched.reminderTime && errors.reminderTime && (
                        <Text style={styles.errorText}>
                          {errors.reminderTime.toString()}
                        </Text>
                      )}
                    </View>
                    {/* Time Picker */}
                    <DatePicker
                      modal
                      mode="time"
                      open={openTimePicker}
                      date={
                        values.reminderTime
                          ? moment(values.reminderTime, 'hh:mm A').toDate()
                          : new Date()
                      }
                      onConfirm={time => {
                        setOpenTimePicker(false);
                        setFieldValue(
                          'reminderTime',
                          moment(time).format('hh:mm A'),
                        );
                      }}
                      onCancel={() => setOpenTimePicker(false)}
                    />
                  </View>

                  {/* Description */}
                  <View style={styles.inputPosition}>
                    <View style={styles.inputHeaderStyle}>
                      <Text style={styles.inputHeaderText}>Description</Text>
                      <CustomTextArea
                        value={values.description}
                        onChange={handleChange('description')}
                        placeholder="Task Description"
                        placeholderTextColor={colors.gray}
                      />
                      {touched.description && errors.description && (
                        <Text style={styles.errorText}>
                          {errors.description.toString()}
                        </Text>
                      )}
                    </View>
                  </View>

                  {/* Save Button */}
                  <View style={styles.saveButtonPosition}>
                    <CustomButton
                      text="Save"
                      onPress={handleSubmit}
                      disabled={disabled}
                    />
                  </View>

                  {/* Clear Button */}
                  <View style={styles.clearButtonPosition}>
                    <TouchableOpacity
                      style={styles.clearButtonStyle}
                      onPress={() => {
                        resetForm({
                          values: {
                            title: '',
                            reminderDate: '',
                            reminderTime: '',
                            description: '',
                          },
                        });
                      }}>
                      <Text style={styles.clearText}>Clear all</Text>
                    </TouchableOpacity>
                  </View>
                </>
              )}
            </Formik>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default EditTaskScreen;
