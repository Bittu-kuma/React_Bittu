const initialState = [
    {
        id: 0,
        name: "David",
        number:8298262899,
    },
    {
        id: 1,
        name: "Peter",
        number:9507003645,
    },
]

const ContactReducer = (state=initialState, action)=>
{
    switch(action.type)
    {
        case "ADD_CONTACT":
            state = [...state, action.payload]
            return state;
        case "UPDATE_CONTACT":
            const updateState = state.map(contact => contact.id === action.payload.id ? action.payload : contact);
            state = updateState;
            return state;
        case "DELETE_CONTACT":
            const filterContact = state.filter(contact => contact.id !== action.payload && contact);
            state = filterContact;
            return state;

        default:
            return state;
    }
}

export default ContactReducer;