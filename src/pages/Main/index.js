import React, { Component } from 'react';
import { FaDog, FaPaw, FaSpinner } from 'react-icons/fa';
import { Container, Form, SubmitButton, List } from './styles';

import api from '../../services/apiDog';

export default class Main extends Component {
    // eslint-disable-next-line react/state-in-constructor
    state = {
        newDog: '',
        listDogs: [],
        loading: false,
    };

    componentDidMount() {
        const listDogs = localStorage.getItem('listDogs');

        if (listDogs) {
            this.setState({ listDogs: JSON.parse(listDogs) });
        }
    }

    componentDidUpdate(_, prevState) {
        const { listDogs } = this.state;

        if (prevState.listDogs !== listDogs) {
            localStorage.setItem('listDogs', JSON.stringify(listDogs));
        }
    }

    handleInputChange = e => {
        this.setState({ newDog: e.target.value });
    };

    handleSubmit = async e => {
        e.preventDefault();

        this.setState({ loading: true });

        const { newDog, listDogs } = this.state;

        const response = await api.get(`/${newDog}/images/random`);

        const data = {
            nameDog: response.data.message,
        };

        this.setState({
            listDogs: [...listDogs, data],
            newDog: '',
            loading: false,
        });
    };

    render() {
        const { newDog, loading, listDogs } = this.state;
        return (
            <Container>
                <h1>
                    <FaDog />
                    Dog API
                </h1>
                <Form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="what breed are you looking for?"
                        value={newDog}
                        onChange={this.handleInputChange}
                    />
                    <SubmitButton loading={loading}>
                        {loading ? (
                            <FaSpinner size={20} />
                        ) : (
                            <FaPaw size={20} />
                        )}
                    </SubmitButton>
                </Form>
                <List>
                    {listDogs.map(listDog => (
                        <div key={listDog.nameDog}>
                            <img src={listDog.nameDog} alt="dog" />
                        </div>
                    ))}
                </List>
            </Container>
        );
    }
}
