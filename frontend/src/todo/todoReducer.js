const INITAL_STATE = {
    description: 'Ler Livro',
    list: [{
        _id: 1,
        description: 'Pagar fatura do cartão',
        done: true
    },{
        _id: 2,
        description: 'Reunião com a equipe ás 10:00',
        done: false
    },{
        _id: 3,
        description: 'Consulta médica na terça depois do almoço',
        done: false
    }]
}

export default (state = INITAL_STATE, action) => {
    switch(action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        default: 
            return state
    }
}