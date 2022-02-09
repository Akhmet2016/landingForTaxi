if (window.matchMedia('screen and (max-width: 414px)').matches) {
    // document.getElementById("telegram").style.display = "none";
    // document.getElementById("whatsapp").style.display = "none";
    document.getElementById("connection-text").style.display = "none";
} else {

}



$('#sendMail2').on('click', function () {
    let name = $('#name2').val().trim();
    let telephone = $('#telephone2').val().trim();
    let city = $('#city2').val().trim();
    let check = $('#check2').is(':checked');
    let errorMessage = $('#errorMessage2');
    let sendMail = $('#sendMail2');
    let formMail = $('#formMail2');
    send(name,telephone,city,check,errorMessage,sendMail,formMail);
});

$('#sendMail1').on('click', function () {
    let name = $('#name1').val().trim();
    let telephone = $('#telephone1').val().trim();
    let city = $('#city1').val().trim();
    let check = $('#check1').is(':checked');
    let errorMessage = $('#errorMessage1');
    let sendMail = $('#sendMail1');
    let formMail = $('#formMail1');
    send(name,telephone,city,check,errorMessage,sendMail,formMail);
});

function send(name,telephone,city,check,errorMessage,sendMail,formMail) {
    if (name !== '') {
        if (telephone !== '') {
            if (city !== '') {
                if (check !== false) {
                    errorMessage.text('');
                    $.ajax({
                        url: 'ajax/mail.php',
                        type: 'POST',
                        cache: false,
                        data: {name,telephone,city,check},
                        dataType: 'html',
                        beforeSend: function() {
                            sendMail.prop('disabled', true);
                        },
                        success: function(data) {
                            console.log(data);
                            if (!data) {
                                alert('Были ошибки, сообщение не отправлено!');
                            } else {
                                alert('Ваша заявка успешна принята! ');
                                formMail.trigger('reset');
                            }
                            sendMail.prop('disabled', false);
                        }
                    });
                } else {
                    errorMessage.text('Согласитесь с условиями');
                }
            } else {
                errorMessage.text('Введите город');
            }
        } else {
            errorMessage.text('Введите номер телефона');
        }
    } else {
        errorMessage.text('Введите имя');
    }
}