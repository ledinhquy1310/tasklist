var app = angular.module("myApp", []);
app.controller("todoCtrl", function ($scope) {
    // tạo mảng
    $scope.tasklist = [];
    // xác định dữ liệu = ""
    $scope.taskname = "";
    // thêm dữ liệu
    $scope.add = function () {
        if ($scope.taskname.length == 0) {
            alert("You must write a task name!");
        } else {
            $scope.tasklist.push({ taskname: $scope.taskname, checked: false });
        }
        $scope.taskname = "";
        $scope.saveData();
    };
    // xóa dữ liệu
    $scope.removeItem = function (index) {
        $scope.tasklist.splice(index, 1);
        $scope.saveData();
    };
    // Lưu dữ liệu vào local storage
    $scope.saveData = function () {
        localStorage.setItem("data", angular.toJson($scope.tasklist));
    };
    // Hiển thị danh sách mục công việc khi trang được tải
    $scope.show = function () {
        $scope.tasklist = angular.fromJson(localStorage.getItem("data")) || [];
    };

    // Gọi hàm hiển thị khi trang được tải
    $scope.show();

    //cập nhật dữ liệu khi trạng thái checkbox thay đổi
    $scope.updateTask = function (task) {
        $scope.saveData();
    };

    //cập nhật dữ liệu khi trạng thái checkbox thay đổi
    $scope.updateTask = function (task) {
        $scope.saveData();
    };

});
