var menuApp = angular.module("menu", []);
menuApp.controller("menuCtrl", ['$scope', function ($scope) {

    // --- DATA
    $scope.chapters = [
        {chapter: 0, isSelected: false},
        {chapter: 1, isSelected: false},
        {chapter: 2, isSelected: false},
        {chapter: 3, isSelected: false},
        {chapter: 4, isSelected: false},
        {chapter: 5, isSelected: false},
        {chapter: 6, isSelected: false},
        {chapter: 7, isSelected: false},
        {chapter: 8, isSelected: false},
        {chapter: 9, isSelected: false},
        {chapter: 10, isSelected: false},
        {chapter: 11, isSelected: false},
        {chapter: 12, isSelected: false},
        {chapter: 13, isSelected: false},
        {chapter: 14, isSelected: false},
        {chapter: 15, isSelected: false},
        {chapter: 16, isSelected: false},
        {chapter: 17, isSelected: false},
        {chapter: 18, isSelected: false},
        {chapter: 19, isSelected: false},
        {chapter: 20, isSelected: false},
        {chapter: 21, isSelected: false}
    ];

    // --- MECHANISM
    $scope.showHideChapter = function(chapter) {
        const auxConditions = [-1, chapter];
        const index = $scope.chapters.findIndex(chapter => chapter.isSelected === true);
        if (!auxConditions.includes(index)) $scope.chapters[index].isSelected = false;
        $scope.chapters[chapter].isSelected = !$scope.chapters[chapter].isSelected;
    }
}]);
