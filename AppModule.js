var customerModule = angular.module('customerApp',[])
customerModule.controller('customerCtrl',function($scope,$http){
    $scope.customerData = []
    $scope.getCustomerData = function(){
        $http.get('/api/getCustomerData').then((response)=>{ 
            $scope.customerData=response.data
        })
    } 
    $scope.getCustomerData()
    $scope.newCustomerData={}
    $scope.AddUser=function(){
        $http.post('/api/addNewCustomer',$scope.newCustomerData).then((response)=>{
            $scope.customerData.push(response.data)
            $scope.newCustomerData={}
        })
    }

    $scope.deleteItem = function (item) {
        $http.delete(`/api/delete/${item}`).then((response) => {
            $scope.items = response.data
            $scope.getCustomerData()
        })
    }

    $scope.updateItem = (item) => {
        $scope.edit = true
        $scope.updatedItem = item
    }
    $scope.editItem = function (up) {
        $http.put(`/api/update/${up._id}`, up).then((response) => {
            $scope.items = response.data
        })
        //$scope.getCustomerData()
    }
    $scope.getCustomerData()
    
})