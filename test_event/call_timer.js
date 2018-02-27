var module = require('./custom_event');

var dateUtil = require('./dateUtil');

module.timer.on('tick', function(time) {
  var time = dateUtil.format(new Date(), 'yyyy-MM-dd HH:mm:ss');
  console.log('현재시간: ' + time);
});
