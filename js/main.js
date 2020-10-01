$(document).ready(function () {
    $(".form-start").click(function () {
        $(".popup").toggleClass("active");
        $("body").toggleClass('lock');
    })

    $(".popup__close").click(function () {
        $(".popup").removeClass("active");
        $("body").removeClass('lock');
    });

    $(document).click(function (event) {
        if ($(event.target).is('.popup')) {
            $(".popup").removeClass("active");
            $("body").removeClass('lock');
        }
    });

    $("#form").submit(function () {
        $ajax({
            type: "POST",
            url: "send.php",
            dataType: 'json',
            data: $(this).serialize(),
            success: function () {
                $(".popup").html('<p>Мы Вам скоро перезвоним</p>');
                $('#form').trigger('reset');
                setTimeout(function () {
                    $(".popup").removeClass("active");
                    $("body").removeClass('lock');
                }, 5000);
            },
            error: function () {
                $(".popup").html('<p>Попробуте еще раз</p>');
            }
        });
        event.preventDefault();
    })

    $(".cost__button-1").click(function () {
        $(".cost__item-open-1").addClass('active');
        $("body").addClass('lock');
    });
    $(".item__close").click(function () {
        $(".cost__item-open-1, .cost__item-open-2, .cost__item-open-3").removeClass("active");
        $("body").removeClass('lock');
    });
    $(".cost__button-2").click(function () {
        $(".cost__item-open-2").addClass('active');
        $("body").addClass('lock');
    });
    $(".cost__button-3").click(function () {
        $(".cost__item-open-3").addClass('active');
        $("body").addClass('lock');
    });
    $(document).click(function (event) {
        if ($(event.target).is(".cost__item-open-1, .cost__item-open-2, .cost__item-open-3")) {
            $(".cost__item-open-1, .cost__item-open-2, .cost__item-open-3").removeClass("active");
            $("body").removeClass('lock');
        }
    });

    $(".item__button").click(function () {
        $(".popup").addClass("active");
        $(".cost__item-open-1, .cost__item-open-2, .cost__item-open-3").removeClass("active");
    });


    $(".effect__video").click(function () {
        $(".effect__video-open").addClass("active");
        $("body").addClass('lock');
    });
    $(".video__close").click(function () {
        $(".effect__video-open").removeClass("active");
        $("body").removeClass('lock');
    });
    $(document).click(function (event) {
        if ($(event.target).is(".effect__video-open")) {
            $(".effect__video-open").removeClass("active");
            $("body").removeClass('lock');
        }
    });


    $(function () {
        $("#phone").mask("8(999) 999-99-99");
    });


    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.action__title').css('opacity', "1");
            $('.action__text').addClass('action__text-active');
        }
        if ($(this).scrollTop() > 2700) {
            $(".why-school__col-1, .why-school__col-2").addClass('why-school__col-active');
        }
        if ($(this).scrollTop() > 5500) {
            $(".cost-1, .cost-3").addClass('cost-active');
        }
        if ($(this).scrollTop() > 7900) {
            $(".partners__items").addClass('partners__items-active');
        }
    });
});