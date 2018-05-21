const center = {}

const eventContain = {}

// listen on event
center.$on = function(eventName, cb) {
  if(!eventContain[eventName]) {
    // 这个事件还没执行过监听
    eventContain[eventName] = [];
  }
  eventName[eventName].push(cb);
}

// dispatch event
center.$emit = function(eventName, ...rest) {
  // 获得事件名字相同的回调函数列表，挨个执行回调函数
  let eventList = eventContain[eventName];
  if(eventList) {
    // 如果eventList不为空
    eventList.map(cb => {
      cb(...rest);
    })
  }
}

// remove listen
center.$off = function(eventName) {
  // 清空事件名字相同的事件列表
  eventContain[eventName] = [];
}

export default center;
