import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {  MuiPickersUtilsProvider,KeyboardDatePicker} from '@material-ui/pickers';

const DateInput = ({eventData,setEventData}) => {
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Date picker inline"
            value={eventData.eventDate}
            onChange={(e)=>setEventData({...eventData,eventDate:new Date(e)})}
            KeyboardButtonProps={{
                'aria-label': 'change date',
            }}
            />
        </MuiPickersUtilsProvider>
    )
}

export default DateInput