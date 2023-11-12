import React, {useEffect} from 'react';
import Root from './Src/setup';
import 'react-native-gesture-handler';
import GetSMS from 'react-native-get-sms-android';
import moment from 'moment';
import {getSMSReadPermission} from "./Src/Utils/permissions";
import {Alert} from "react-native";

const App = () => {

  const getSMS = async  ()=>{

    try{
      let filter = {
        box: 'inbox', // 'inbox' (default), 'sent', 'draft', 'outbox', 'failed', 'queued', and '' for all
        // The following 2 filters can be used for getting messages from a particular period
        minDate: moment().subtract(1, 'months').valueOf().toString(), // 1 month back from now
        maxDate: moment().valueOf().toString(), // current time
      };

      const result = await getSMSReadPermission();
      console.log('result = ', result);
      if(result){
        GetSMS.list(
            JSON.stringify(filter),
            (fail) => {
              console.log('Failed with this error: ' + fail);
            },
            (count, smsList) => {
              console.log('Count: ', count);
              // console.log('List: ', smsList);
              let arr = JSON.parse(smsList);

              // arr.forEach(function (object) {
              //   console.log('Object: ' + object);
              //   console.log('-->' + object.date);
              //   // console.log('-->' + object.body);
              // });
            },
        );
      }else{
        Alert.alert('Permission not granted');
      }


    }catch (err){
      console.error(err);
    }


  }

  useEffect(() => {
    getSMS();
  }, []);



  return (
    <Root />
  );
};
export default App;
