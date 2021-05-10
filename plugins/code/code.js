+(function(window, $){
  var timer = null
  window.Code = {
    text: '发送验证码',
    time: 60,
    dom: '',
    send: function (dom) {
      this.dom = dom;
      if(this.isDisabled()) return

      $(dom).addClass("disabled");
      $(dom).text(this.time + ' s');
      this.timer(this.time)
    },
    isDisabled: function () {
      return $(this.dom).hasClass("disabled");
    },
    timer: function () {
      var _this = this;
      var dom = this.dom;
      var time = this.time;
      var text = this.text;
      timer = setInterval(function () {
        time --;
        if(time === 0) {
          $(dom).removeClass("disabled");
          $(dom).text(text);
          clearInterval(timer)
        }  else {
          $(dom).text(time + ' s');
        }
      }, 1000);
    },
    destory: function (dom) {
      var text = this.text;
      $(dom).removeClass("disabled");
      $(dom).text(text);
      if(timer) return clearInterval(timer);
    }
  }
})(window, $);