import {ErrorMessage, Field, Form, Formik} from 'formik'
import * as y from 'yup'

const UserForm = () => {

    const initialValues = {firstName: '', email: ''}
    const onSubmit = (values: any, formik: any) => {
        setTimeout(() => {
            console.log({values, formik});
            formik.setSubmitting(false);
        }, 2000);
    }    
    const UserScheme = y.object().shape({
        firstName: y.string()
            .min(3, 'At least 3 chars required')
            .max(10, 'Name should be less than 10 chars')
            .required('Enter the title'),
        email: y.string()
            .email()
            .required('email is required')
    });

    return (
        <Formik validateOnChange={false} initialValues={initialValues} onSubmit={onSubmit} validationSchema={UserScheme}>
            {({isSubmitting, isValid}) => (
                <Form>
                    <div>
                        <Field 
                        className='rounded-md border-2 border-black px-2 m-2'
                        name="firstName" 
                        type="text" 
                        />
                    </div>
                    <ErrorMessage className='text-red-500 px-3' name='firstName' component="div"></ErrorMessage>
                    <div>

                    <Field 
                        className='rounded-md border-2 border-black px-2 m-2' name="email" type="email" />

                    </div>
                    <ErrorMessage  className='text-red-500 px-3' name='email'  component="div"></ErrorMessage>
                    {!isSubmitting && isValid && <button 
                    className='rounded-md border-2 border-black px-2 m-2' 
                    type='submit'>Save</button>}
                </Form>
            )}
        </Formik>
    )
}
export default UserForm;