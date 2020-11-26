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


Vue.component('todo-item',{
    props:['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue ({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: 'Овочі' },
            { id: 1, text: 'Сир' },
            { id: 2, text: 'Що ще люди їдять' }
        ]
    }
})

let obj = {
    foo: 'bar',
    place: 'IF'
}

// Object.freeze(obj);

new Vue({
    el: '#app-8',
    data: obj
})

const vm = new Vue ({
    el: '#example',
    data: {
        message: 'Привіт'
    },
    computed: {
        reversedMessage: function() {
            return this.message.split('').reverse().join('')
        }
    }
})

const watchExampleVM = new Vue({
    el: '#watch-example',
    data: {
        question: '',
        answer: 'Поки ви не задасте питання, я не можу відповісти!'
    },
    watch: {
        question: function(newQuestion, oldQuestin) {
            this.answer = 'Очікую, коли ви закінчите друкувати...'
            this.debouncedGetAnswer()
        }
    },
    created: function() {
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
    },
    methods: {
        getAnswer: function () {
            if (this.question.indexOf('?') === -1)  {
                this.answer = 'Запитання зазвичай закінчуються знаком питання.'
                return
            }
            this.answer = 'Думаю...'
            var vm = this
            axios.get('https://yesno.wtf/api')
                .then(function (response) {
                    vm.answer = _.capitalize(response.data.answer)
                })
                .catсh(function (error) {
                    vm.answer = 'Помилка! Не можу звязатися з API' + error
                })
        }
        
    }
})