import { todoProps } from './todo'
export const categoriesData = {
    shoppingList: 'Shopping List',
    finance: 'Finance',
    wedding: 'Wedding',
    freelance: 'Freelance'
}

export const initaltodoData = [
    {
        [todoProps.id]: '1',
        [todoProps.isCompleted]: true,
        [todoProps.name]: 'Hand sanitizer',
        [todoProps.category]: categoriesData.shoppingList
    },
    {
        [todoProps.id]: '2',
        [todoProps.isCompleted]: false,
        [todoProps.name]: 'Upload 1099-R to TurboTax',
        [todoProps.category]: categoriesData.finance
    },
    {
        [todoProps.id]: '3',
        [todoProps.isCompleted]: true,
        [todoProps.name]: 'Submit 2019 tax return',
        [todoProps.category]: categoriesData.finance
    },
    {
        [todoProps.id]: '4',
        [todoProps.isCompleted]: false,
        [todoProps.name]: 'Print parking passes',
        [todoProps.category]: categoriesData.wedding
    },
    {
        [todoProps.id]: '5',
        [todoProps.isCompleted]: true,
        [todoProps.name]: 'Sign contract, send back',
        [todoProps.category]: categoriesData.freelance
    }
]
