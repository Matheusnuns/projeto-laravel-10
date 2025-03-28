function deleteRegistroPaginacao(rotaUrl, idDoRegistro){
 
    if (confirm('Deseja realizar a exclusão??')) {
        $.ajax({
            url: rotaUrl,
            method: 'DELETE',
            headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
            data: {
                id: idDoRegistro,
            },
            beforeSend: function () {
                $.blockUI({
                    message: 'Carregando...',
                    timeout: 2000,
                });
            },
        }).done(function (data) {
            $.unblockUI();
            if (data.success == true) {
                alert('Produto excluído com sucesso!');
                window.location.reload();
            } else {
                alert('não foi possivel excluir');
            }
        }).fail(function (data) {
            $.unblockUI();
            alert('Não foi possivel buscar os dados');
    });
}
}