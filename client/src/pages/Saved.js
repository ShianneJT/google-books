import React, { Component } from 'react';
import API from "../utils/API";
import Button from "../components/Button";
import { List, ListItem } from "../components/List";
import { ResultsContainer, Row, TitleRow } from '../components/Grid';


class Saved extends Component {
    state = {
        books: []
    };

    componentDidMount() {
        this.getAllBooks();
    }

    getAllBooks = () => {
        API.getSavedBooks()
            .then(res =>
                this.setState({
                    books: res.data
                })
            )
            .catch(err => console.log(err));
    };

    handleBookDelete = _id => {
        API.deleteBook(_id).then(res => this.getAllBooks());
    };

    render() {
        return (
            <>
                <ResultsContainer>
                    {this.state.books.length ? (
                        <List>
                            {this.state.books.map(book => (
                                <ListItem key={book.id}>
                                    <Row><img src={book.image} />
                                        <TitleRow>
                                            <h3>{book.title}</h3>
                                            <p>{book.authors}</p>
                                        </TitleRow>
                                    </Row>

                                    <p>{book.description}</p>
                                    <p><a href={book.link}>Book Info</a></p>

                                    <Button key={book._id} onClick={() => this.handleBookDelete(book._id)} className="input-lg">Delete</Button>
                                </ListItem>
                            ))}
                        </List>
                    ) : (
                            <h3>No Results to Display</h3>
                        )}
                </ResultsContainer>
            </>
        );
    }
}

export default Saved;
