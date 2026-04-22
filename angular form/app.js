// app.js

const app = angular.module("studentApp", []);

app.controller("StudentController", function ($scope) {

  $scope.student = {};
  $scope.submitted = false;

  $scope.submitForm = function () {

    // $valid checks whether all fields are valid
    if ($scope.studentForm.$valid) {

      // Save entered data
      $scope.savedStudent = angular.copy($scope.student);

      // Show data section
      $scope.submitted = true;

      // Optional: clear form after submit
      $scope.student = {};
      $scope.studentForm.$setPristine();
      $scope.studentForm.$setUntouched();
    }
  };

});