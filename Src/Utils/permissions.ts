import {
  check,
  PERMISSIONS,
  request,
  RESULTS,
  Permission,
  PermissionStatus,
} from 'react-native-permissions';
import {Alert, Linking, Platform} from 'react-native';

const checkPermission = async (permission: Permission): Promise<boolean> => {
  try {
    const response: PermissionStatus = await check(permission);
    console.log('checkPermission ' + permission + ' = ', response);
    return response === RESULTS.GRANTED;
  } catch (err) {
    console.error(err);
    return false;
  }
};

export const openSettings = (): void => {
  if (Platform.OS === 'ios') {
    Linking.openURL('app-settings:');
  } else {
    Linking.openSettings();
  }
};

const requestPermission = async (permission: Permission): Promise<boolean> => {
  try {
    console.log('Requesting permission = ', permission);
    const response = await request(permission, {
      title: 'Permission Required',
      message: 'This app needs access to your camera roll',
      buttonNeutral: "Ask Me Later",
      buttonNegative: "Cancel",
      buttonPositive: "OK"
    });
    console.log('Permission response = ', response);
    return response === RESULTS.GRANTED;
  } catch (err) {
    console.error(err);
    return false;
  }
};

const askPermission = async (permission: Permission): Promise<boolean> => {
  try {
    const result = await checkPermission(permission);
    console.log('askPermission ' + permission + ' = ', result);
    if (!result) {
      const requestResult = await requestPermission(permission);
      console.log(
        'requestPermission ' + permission + ' = ',
        requestResult ? 'Granted' : 'Denied',
      );
      return requestResult;
    } else {
      return true;
    }
  } catch (err) {
    console.error(err);
    return false;
  }
};

export const getSMSReadPermission = async (): Promise<boolean> => {
  return await askPermission(PERMISSIONS.ANDROID.READ_SMS);
};


export const showAlert = (
  title: string,
  message: string,
  onOk: () => void,
  onCancel: () => void = () => {},
): void => {
  Alert.alert(
    title,
    message,
    [
      // The "Cancel" button
      {
        text: 'Cancel',
        onPress: onCancel,
        style: 'cancel',
      },
      // The "OK" button
      {
        text: 'OK',
        onPress: onOk,
      },
    ],
    {cancelable: true}, // This makes the alert cancelable by tapping outside of the alert
  );
};
