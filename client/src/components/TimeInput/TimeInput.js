import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {  MuiPickersUtilsProvider,KeyboardTimePicker} from '@material-ui/pickers';

const TimeInput = ({eventData,setEventData}) => {
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardTimePicker
                margin="normal"
                id="time-picker"
                label="Event Time"
                value={eventData.eventTime}
                onChange={(e)=>setEventData({...eventData,eventTime:new Date(e)})}
                KeyboardButtonProps={{
                    'aria-label': 'change time',
                }}
            />
        </MuiPickersUtilsProvider>
    )
}

export default TimeInput