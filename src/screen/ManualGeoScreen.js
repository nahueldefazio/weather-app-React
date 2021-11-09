import React, {useContext} from 'react';
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import WeatherContext from "../context/weatherContext";
import {Spinner} from "react-bootstrap";
import ShowData from "../showData";
import {Link} from "react-router-dom";

function ManualGeoScreen() {

    const {getManualWeather, loading} = useContext(WeatherContext);

    const ErrorSchema = Yup.object().shape({
        cityName: Yup.string().required("Enter a valid city.").min(3, "City name is too short").max(20, "City name is too long"),
    })


    return (
        <div>
            <Link to={"/"}  className={'btn btn-success m-2'}>
                Back
            </Link>
            <Formik initialValues={{
                cityName: "",
            }} onSubmit={(values => {
                getManualWeather(values);
            })} validationSchema={ErrorSchema}
            >
                {
                    (props) => {
                        return (
                            <Form className={'m-auto w-50 center-form'}>
                                <div className={'d-flex flex-column m-3 align-items-center'}>
                                    <h3 className={'text-center mt-5 fs-1'}>Enter city name:</h3>
                                    <Field name={'cityName'} type={'text'} className={'w-100 form-control'}/>
                                    <small className={'error'}>{props.errors.cityName}</small>
                                    <button className={'btn btn-outline-success w-50 my-3'} type={'submit'} disabled={!props.isValid}> Send
                                    </button>
                                </div>

                            </Form>
                        )
                    }
                }
            </Formik>

                {loading ? <Spinner animation="border" variant="danger" />  : <ShowData />}

        </div>

    );
}

export default ManualGeoScreen;