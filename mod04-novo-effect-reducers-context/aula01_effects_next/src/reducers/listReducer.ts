import { ItemTarefa } from "@/types/ItemTarefa";

type AddAction = {
    type: 'add';
    payload: {
        text: string
    };
}

type EditTextAction = {
    type: 'editText';
    payload: {
        id: number;
        newText: string;
    }
}

type ToggleDoneAction = {
    type: 'toggleDone';
    payload: {
        id: number
    };
}

type RemoveAction = {
    type: 'remove';
    payload: {
        id: number
    };
}

type ListActions = AddAction | EditTextAction | ToggleDoneAction | RemoveAction;

export const listReducer = (list: ItemTarefa[], action: ListActions) => {

    // executar alguma ação
    // ao final retornar a lista atualizada
    // por isso mando os dados originais 'list' e a ação a ser executada 'action'

    // action.type // qual ação a ser executada
    // action.payload // qual a carga dela, o dado que mando junto da ação

    switch (action.type) {
        case 'add':
            return [ ...list, { 
                id: list.length, 
                text: action.payload.text, 
                done:false
              }];

        case 'editText':
            return list.map(t => {
                if (t.id === action.payload.id) {
                    t.text = action.payload.newText;
                };
                return t;
              });

        case 'toggleDone':
            return list.map(t => {
                if (t.id === action.payload.id) {
                    t.done = !t.done;
                };
                return t;
              })

        case 'remove':
            return list.filter(t => t.id !== action.payload.id)

        default:
            return list;
    }

}