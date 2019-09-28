// https://www.zola.com/registry/<your-site-name>/edit

var deleteButtons = document.getElementsByClassName('zolaicon-trash');

var clickButtonWithCallback = function(button, callback) {
  button.click();
  callback();
}

for (let del of deleteButtons) {
  clickButtonWithCallback(del, function() {
      document.querySelector('[ng-click="deleteItem()"]').click();
  });
};
