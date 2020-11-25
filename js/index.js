let app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }

});

app.message = 'I have change data!';

let app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'Вы загрузили эту страницу: ' + new Date().toLocaleString()
    }
});

let app3 = new Vue ({
    el: '#app-3',
    data: {
        seen: true
    }
});

app3.seen = true;

let app4 = new Vue ({
    el: '#app-4',
    data: {
        todos: [
            { text: 'Вивчити JavaScript' },
            { text: 'Вивчити Vue' },
            { text: 'Створити щось круте!' }
        ]
    }
});

app4.todos.push({ text: 'Profit' });
app4.todos.push({ text: 'Зробити з Бачкурем проект!!!' });