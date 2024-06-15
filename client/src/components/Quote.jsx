import React, { useState, useEffect } from 'react';
import { Spinner, Container } from 'react-bootstrap';

const Quote = () => {
    const [quote, setQuote] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchQuote = async () => {
            try {
                const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=inspirational', {
                    headers: {
                        'X-Api-Key': 'Tb07kogOMs88wgbcUGoZ/Q==aveHlHAPqj1GDrLm' // Replace with your actual API key
                    }
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch quote');
                }
                const data = await response.json();
                setQuote(data[0].quote); // Assuming data is an array and you want the first quote
            } catch (error) {
                console.error('Error fetching quote:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchQuote();
    }, []);

    if (loading) {
        return (
            <Container className="text-center">
                <Spinner animation="border" role="status">
                </Spinner>
            </Container>
        );
    }

    return (
        <Container className="text-center" style={{ marginTop: '1rem' }}>
            <p style={{ fontSize: '18px', fontStyle: 'italic', maxWidth: '600px', margin: '0 auto' }}>
                "{quote}"
            </p>
        </Container>
    );
};

export default Quote;
