import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchLink } from '../../store/LinksSlice';
import s from './Form.module.scss';
const Form = () => {
    var isValidUrl = function(url) {
        var result = /^(http[s]?:\/\/){1}[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/g.test(url);
        return result;
      }
    const dispatch=useDispatch();
    const validate = (values) => {
        const isValid=isValidUrl(values.url)
        const errors = {};
        if (!values.url) errors.url = 'Required!';
        else if(!isValid){
            errors.url = '"Please enter valid URL."'
        }
        return errors;
    };
    const formik = useFormik({
        initialValues: {
            url: '',
        },
        validate,
        onSubmit: (values) => {
           dispatch(fetchLink(values.url));
           formik.resetForm();
        },
    });
    return (
        <div>
            <form onSubmit={formik.handleSubmit} className={s.Form} action=''>
                <div className={s.formItems}>
                    <input
                        onChange={formik.handleChange}
                        value={formik.values.url}
                        name='url'
                        id='url'
                        className={s.input}
                        type='url'
                        style={{'outlineColor':formik.errors.url ? 'red' : 'currentcolor'}}
                    />
                    <button type='submit' className={s.submit}>
                        Shorten It!
                    </button>
                </div>
                {formik.errors.url && formik.touched.url ? <div style={{'color':'red','paddingTop':'10px'}}>{formik.errors.url}</div> : null} 
            </form>
        </div>
    );
};

export default Form;
