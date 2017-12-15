import moment from 'moment';
export default {
  timeFormat(time, format = 'YYYY-MM-DD HH:mm:ss') {
    return moment(time).format(format);
  }
};