import React, { Component } from 'react';
import API from '../utils/API';
import Button from '../components/Button';
import { ResultsContainer, Container, Row, TitleRow } from '../components/Grid';
import { List, ListItem } from '../components/List';
import { FormGroup, FormInput, SearchBtn } from '../components/Form';

class Books extends Component {
    state = {
        books: [],
        searchTerm: '',
        authors: []
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    searchBooks = () => {
        API.getBooks(this.state.searchTerm)
            .then(res => {
                console.log(res.data.items);
                this.setState({ books: res.data.items });
            })
            .catch(err => console.log(err));
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBooks();
    };

    handleSave = id => {
        const book = this.state.books.find(book => book.id === id);

        API.saveBook({
            id: book.id,
            title: book.volumeInfo.title,
            link: book.saleInfo.buyLink,
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail
        }).then(() => this.searchBooks());
    };

    render() {
        return (
            <>
                <Container>
                    <FormGroup>
                        <FormInput name='searchTerm' value={this.state.searchTerm} onChange={this.handleInputChange} placeholder='Search For a Book' />
                        <SearchBtn onClick={this.handleFormSubmit}>Search</SearchBtn>
                    </FormGroup>
                </Container>

                <ResultsContainer>
                    <List>
                        {this.state.books.map(book => (
                            <ListItem key={book.id}>
                                <Row><img src={book.volumeInfo.imageLinks.smallThumbnail} />
                                    <TitleRow>
                                        <h3>{book.volumeInfo.title}</h3>
                                        <p>{book.volumeInfo.authors}</p>
                                    </TitleRow>
                                </Row>
                                <p>{book.volumeInfo.description}</p>
                                <p><a href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer" style={{color: '#243144', textDecoration: 'underline'}}>Book Info</a></p>
                                <Button key={book.volumeInfo.title} onClick={() => this.handleSave(book.id)} className='input-lg'>Save</Button>
                            </ListItem>
                        ))}
                    </List>
                </ResultsContainer> 
            </>
        )
    }
}

export default Books;
