import { useFormik} from 'formik'
import { useLayoutEffect, useRef } from 'react';
import * as y from 'yup'

const PostForm = ({onSubmit}: any) => {
    const PostScheme = y.object().shape({
        title: y.string()
            .min(3, 'At least 3 chars required')
            .max(10, 'Title should be less than 10 chars')
            .required('Enter the title'),
        body: y.string()
            .min(5, 'At lest 5 chars required')
            .required('Description is required')
    });
    const formik = useFormik({
        initialValues: {title: '', body: ''},
        validationSchema: PostScheme,
        onSubmit: (vals, {setSubmitting}) => { onSubmit(vals, setSubmitting)}
    })
    const inputRef = useRef<HTMLInputElement>(null)
    useLayoutEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>

            <input 
                ref={inputRef}
                className='rounded-md border-2 border-green-400 px-2 m-2'
                name="title" 
                type="text"
                value={formik.values.title}
                onChange={formik.handleChange}
            />
            {formik.errors.title && <div className='text-red-500 px-3'>{formik.errors.title}</div>}
            </div>
            <div>
                <input 
                    className='rounded-md border-2 border-green-400 px-2 m-2' 
                    name="body" 
                    type="text" 
                    value={formik.values.body}
                    onChange={formik.handleChange}
                />
                {formik.errors.body && <div className='text-red-500 px-3'>{formik.errors.body}</div>}
            </div>

            {!formik.isSubmitting && formik.isValid && <button 
                    className='rounded-md border-2 border-green-400 px-2 m-2' 
                    type='submit'>Save</button>}
        </form>
    )
}
export default PostForm;
