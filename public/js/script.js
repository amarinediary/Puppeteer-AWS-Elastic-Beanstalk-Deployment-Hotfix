$("#submit").click(event => {
    event.preventDefault();
    event.stopPropagation();

    let stamp = Date.now(),
        input = $('#input').val();

    let data = {
        stamp: stamp,
        input: input,
    };

    $.ajax({
        url: '/form',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data),
        beforeSend: console.log({
            stamp: stamp,
            input: input,
        }),
        success: response => {
            console.log(`${JSON.stringify(response)}`);
        },
    });
});