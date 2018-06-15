class ReceivingListController{
    constructor($scope, $state, $compile, DTOptionsBuilder, DTColumnBuilder, API){
        'ngInject';
        this.API = API
        this.$state = $state

        let Receivings = this.API.service('receivings')
        Receivings.getList().then((response) => {
            let dataSet = response.plain()

            this.dtOptions = DTOptionsBuilder
            .newOptions()
            .withOption('data',dataSet)
            .withOption('createdRow',createdRow)
            .withOption('responsive',true)
            .withBootstrap()

            this.dtColumns = [
                DTColumnBuilder.newColumn('id').withTitle('ID'),
                DTColumnBuilder.newColumn(null).withTitle('User').renderWith(userHtml),
                DTColumnBuilder.newColumn(null).withTitle('Supplier').renderWith(supplierHtml),
                DTColumnBuilder.newColumn('payment_type').withTitle('Payment Type'),
                DTColumnBuilder.newColumn('items_count').withTitle('Items'),
                DTColumnBuilder.newColumn('amount_tendered').withTitle('Amount Tendered'),
                DTColumnBuilder.newColumn('created_at').withTitle('Date'),
                DTColumnBuilder.newColumn(null).withTitle('Actions').notSortable().renderWith(actionsHtml)
            ]

            this.displayTable = true
        })

        let createdRow = (row) => {
            $compile(angular.element(row).contents())($scope)
        }

        let userHtml = (data) => {
            let content = ``
            // if user can view users
            // render a view user link
            // else
            content = data.user.name
            // end if
            return content
        }

        let supplierHtml = (data) => {
            let content = ``
            // if user can view customers
                // render a view customer link
            // else
                content = data.supplier.first_name + ' ' + data.supplier.last_name
            // end if
            return content
        }

        let actionsHtml = (data) => {
            var buttons = ``
            buttons += `
            <a class="btn btn-xs btn-warning" ui-sref="app.receiving-edit({receivingId: ${data.id}})">
                <i class="fa fa-edit"></i>
            </a>
            &nbsp
            `

            buttons += `
            <a class="btn btn-xs btn-danger" ng-click="vm.delete(${data.id})">
                <i class="fa fa-trash-o"></i>
            </a>
            `
            return buttons
        }
    }

    delete(itemId)
    {
        let API = this.API
        let $state = this.$state
        swal({
            title: 'Are you sure?',
            text: 'You will not be able to recover this data!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Yes, delete it!',
            closeOnConfirm: false,
            showLoaderOnConfirm: true,
            html: false
        }, function () {
            API.one('receivings').one('receiving', itemId).remove().then(() => {
                swal({
                    title: 'Deleted!',
                    text: 'User Permission has been deleted.',
                    type: 'success',
                    confirmButtonText: 'OK',
                    closeOnConfirm: true
                }, function () {
                    $state.reload()
                })
            })
        })
    }



    $onInit(){
    }
}

export const ReceivingListComponent = {
    templateUrl: './views/app/components/receiving-list/receiving-list.component.html',
    controller: ReceivingListController,
    controllerAs: 'vm',
    bindings: {}
}
