import Calendar from './calendar';

const calendarContainers = $('.js-calendar');

calendarContainers.each((_, element) => {
  new Calendar(element);
});