import React, { Component} from 'react'

import Button from '../../../components/UI/Button/Button'
import Spinner from '../../../components/UI/Spinner/Spinner'
import classes from './ContactData.module.css'
import axios from '../../../axios-order'

class ContactData extends Component{
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: '',
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true})
        const order = {
            ingredients: this.props.ingredients, 
            price: this.props.price,
            customer: {
                name: 'Johnny Fang',
                address: {
                    street: 'Elm Street',
                    country: 'Colombia'
                },
                email: 'test@test.com'
            },
            deliverMethod: 'fastest'
        }
        // axios.post('/orders.json', order)
        axios.post('/orders', order)
            .then(response => {
                this.setState({ loading: false});
                this.props.history.push('/')
            })
            .catch(error => {
                this.setState({ loading: false});
                console.log(error)
            })
        
    }

    render () {
        let form = (
            <form>
                    <input className={classes.Input} type="email" name="email" placeholder="Your email"></input>
                    <input className={classes.Input} type="text" name="name" placeholder="Your Name"></input>
                    <input className={classes.Input} type="text" name="street" placeholder="Your street"></input>
                    <input className={classes.Input} type="text" name="postalCode" placeholder="postal Code"></input>
                    <Button btnType="Success" onClick={this.orderHandler}>ORDER</Button> 
                </form>
        );
        if (this.state.loading){
            form = <Spinner />
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact info</h4>
                {form}
            </div>
        )
    }

}

export default ContactData