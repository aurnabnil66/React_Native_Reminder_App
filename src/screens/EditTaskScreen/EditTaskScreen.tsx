import React, {FC, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Formik} from 'formik';
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';
import styles from './style';
import {colors} from '../../theme/colors';
import {taskSchema} from '../../utils/task.schema';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import CustomTextArea from '../../components/CustomTextArea/CustomTextArea';

const EditTaskScreen: FC = () => {
  const [disabled, setDisabled] = useState(false);
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [openTimePicker, setOpenTimePicker] = useState(false);

  const navigation = useNavigation();

  const handleCreateTask = () => {
    setDisabled(true);
    navigation.navigate('Home' as never);
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
          <TouchableOpacity>
            <Text style={styles.clearText}>Clear</Text>
          </TouchableOpacity>
        </View>

        {/* Task Form */}
        <ScrollView contentContainerStyle={{paddingBottom: 105}}>
          <View style={styles.taskFormPosition}>
            <Formik
              validationSchema={taskSchema}
              initialValues={{
                title: '',
                reminderDate: '',
                reminderTime: '',
                description: '',
              }}
              onSubmit={values => {
                handleCreateTask();
                console.log('Form Submitted:', values);
              }}>
              {({
                handleChange,
                handleSubmit,
                setFieldValue,
                values,
                touched,
                errors,
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
                      <Text style={styles.errorText}>{errors.title}</Text>
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
                          {errors.reminderDate}
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
                          {errors.reminderTime}
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
                          {errors.description}
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
