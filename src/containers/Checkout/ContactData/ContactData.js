import React, { Component} from 'react'

import Button from '../../../components/UI/Button/Button'
import Spinner from '../../../components/UI/Spinner/Spinner'
import classes from './ContactData.module.css'
import axios from '../../../axios-order'
import Input from '../../../components/UI/Input/Input'

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
        console.log(this.props)
        this.setState({loading: true})
        const order = {
            ingredients: this.props.ingredients, 
            price: this.props.price,
            customer: {
                name: 'Johnny Fang',
                address: {
                    street: 'Elm Street',
                    zipCode: '41351',
                    country: 'Colombia'
                },
                email: 'test@test.com'
            },
            deliverMethod: 'fastest'
        }
        axios.post('/orders.json', order)
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
                <Input inputType="input" type="email" name="email" placeholder="Your email"/>
                <Input inputType="input" type="text" name="name" placeholder="Your Name"/>
                <Input inputType="input" type="text" name="street" placeholder="Your street"/>
                <Input inputType="input" type="text" name="postalCode" placeholder="postal Code"/>
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button> 
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