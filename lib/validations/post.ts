import * as Yup from 'yup';
 

export const PostValidation = Yup.object().shape({
    title: Yup.string().min(100, 'Minimum 100 characters').required('Required'),
    content: Yup.string().min(50, 'Minimum 50 characters').required('Required'),
    author: Yup.string().required('Required')
})

