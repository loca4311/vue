const app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }

});

app.message = 'I have change data!';

const app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'Вы загрузили эту страницу: ' + new Date().toLocaleString()
    }
});

const app3 = new Vue ({
    el: '#app-3',
    data: {
        seen: true
    }
});

app3.seen = true;

const app4 = new Vue ({
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
app4.todos.push({ text: 'Зробити прект на Vue' });

const app5 = new Vue ({
    el: '#app-5',
    data: {
        message: 'Привіт Vue.js!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
});

const app6 = new Vue ({
    el: '#app-6',
    data: {
        message: 'Привіт Vue!'
    }
});

